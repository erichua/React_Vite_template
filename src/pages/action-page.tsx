import React from 'react';
import { useMatch } from "react-router-dom";
function ActionPage() {
  let match = useMatch("/blog/:slug");
  console.log(match);
  return (
    <div>
      ActionPage
    </div>
  );
}

export default ActionPage;
