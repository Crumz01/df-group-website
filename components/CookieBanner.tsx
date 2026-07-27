"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("df_cookie_ok") !== "1") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("df_cookie_ok", "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie" id="cookie">
      <div className="cookie__inner">
        <div className="cookie__text">
          <strong>This website uses cookies.</strong> We use cookies to analyze
          website traffic and optimize your website experience. By accepting our
          use of cookies, your data will be aggregated with all other user data.
        </div>
        <button
          className="btn btn--solid cookie__btn"
          type="button"
          onClick={accept}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
