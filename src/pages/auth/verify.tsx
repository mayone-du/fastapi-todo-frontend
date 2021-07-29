import type { NextPage } from "next";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useEffect } from "react";
import { useUpdateVerifyCustomUserMutation } from "src/apollo/schema";
import { Layout } from "src/components/layouts/Layout";
import { calcDate } from "src/libs/calcDate";

const Verify: NextPage = () => {
  const router = useRouter();
  const token: string = typeof router.query.token === "string" ? router.query.token : "";
  const exp: string = typeof router.query.exp === "string" ? router.query.exp : "";
  const [updateVerifyCustomUesrMutation] = useUpdateVerifyCustomUserMutation();

  useEffect(() => {
    // TODO: 既にログインや本人確認が済んでいるか、トークンは有効であるかのエラーハンドリング
    // tokenが空文字でなければ
    if (token) {
      // トークンを設定
      setCookie(null, "accessToken", token, { path: "/", maxAge: calcDate(parseFloat(exp)) });
      (async () => {
        const refreshTokenData = await updateVerifyCustomUesrMutation();
        console.log(refreshTokenData.data?.updateVerifyCustomUser?.refreshTokenObject);
      })();

      // tokenを使って更新する処理
      // バックエンドでtokenを検証し、フロントでエラーやローディングのハンドリングをおこなう
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return <Layout meta={{ pageName: "Verify" }}>loading...</Layout>;
};

export default Verify;
