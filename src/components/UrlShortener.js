import React, { useState } from "react";
import "../css/UrlShortener.css";

function UrlShortener() {
  let [value, setValue] = useState("");
  let [shortLink, setShortLink] = useState("");
  let [empty, setEmpty] = useState(false);
  let [copy, setCopy] = useState(false);
  let [loader, setLoader] = useState();
  let [url, setUrl] = useState("");
  let [error, setError] = useState();

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  };

  const handleClick = () => {

    if (value === "") {
      setEmpty(true);
    }
    else if (validURL(value) === true) {
      setCopy(false);
      setLoader(true);
      setError(false);
      setEmpty(false);
      fetch(`https://api.shrtco.de/v2/shorten?url=${value}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          let string = JSON.stringify(result["result"]["full_short_link"]);
          setShortLink(string.replaceAll('"', ""));
          setLoader(false);
          setUrl(value);
        })
      setValue("");
    }
    else {
      setError(true);
      setLoader(false);
      setUrl(value);
      setValue("");
      setEmpty(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink);
    setCopy(true);
  };

  return (
    <div className="urlShortener">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={empty === true || error === true ? "error-input" : ""}
            onChange={handleChange}
          />

          <button className="shorten-btn" onClick={handleClick} type="submit">
            Shorten It!
          </button>
        </form>
        <p
          className="error"
          style={{ display: empty === true ? "block" : "none" }}
        >
          <i>Please add a link</i>
        </p>
        <p className="error"
          style={{ display: error === true && empty === false ? "block" : "none" }}><i>Error in url</i></p>
      </div>
      <ul className="short-link">
        {loader ? (<li>Loading...</li>) :
          error === undefined || error === true ?
            null :
            (
              <li>
                <div className="url">{url}</div>
                <div className="short-copy">
                  <p className="short">
                    {shortLink}
                  </p>
                  <button
                    className="copy-btn"
                    onClick={handleCopy}
                    style={{ background: copy === true ? "#3b3054" : "" }}
                  >
                    {copy === true ? "Copied!" : "Copy"}
                  </button>
                </div>
              </li>
            )
        }
      </ul>
    </div>
  );
}

export default UrlShortener;
