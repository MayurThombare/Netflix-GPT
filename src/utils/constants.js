import userImage from "../assets/user-icon.jpg";
export const logo =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const user_Avatar = userImage;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const bg_Image =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_small.jpg";

export const supported_Languages = [{identifier:"en",name: "English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish", name:"Spanish"}]

