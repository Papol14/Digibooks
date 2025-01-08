import React from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return (
    <div>
      <h1>Product : {id}</h1>
    </div>
  );
};

export default Page;
