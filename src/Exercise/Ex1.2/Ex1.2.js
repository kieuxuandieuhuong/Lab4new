import * as React from "react";
import { FadeLoader } from "react-spinners";
import MyPage from "./MyPage";

function Ex12() {
  return(
    <React.Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
      <MyPage />
    </React.Suspense>
  );
}

export default Ex12;