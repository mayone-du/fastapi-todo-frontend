import type { NextPage } from "next";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useEffect, useState } from "react";
import { Layout } from "src/components/layouts/Layout";
import { useUpdateVerifyCustomUserMutation } from "src/graphql/schemas/schema";
import { calcDate } from "src/libs/calcDate";

// TODO: バックエンド側の返り値を修正
// eslint-disable-next-line @typescript-eslint/naming-convention
type parsedRefreshTokenData = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  expiration_date: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  refresh_token: string;
};
const Verify: NextPage = () => {
  const router = useRouter();
  const token: string = typeof router.query.token === "string" ? router.query.token : "";
  const exp: string = typeof router.query.exp === "string" ? router.query.exp : "";
  const [updateVerifyCustomUesrMutation] = useUpdateVerifyCustomUserMutation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: 既にログインや本人確認が済んでいるか、トークンは有効であるかのエラーハンドリング。 リクエストを投げて、エラー内容によって出し分ける
    // tokenが空文字でなければ
    if (token) {
      // アクセストークンをCookieに保存
      setCookie(null, "accessToken", token, { path: "/", maxAge: calcDate(parseFloat(exp)) });
      (async () => {
        try {
          // 本人確認の更新をし、リフレッシュトークンを受け取る
          const refreshTokenData = await updateVerifyCustomUesrMutation();
          const parsedRefreshTokenData: parsedRefreshTokenData = JSON.parse(
            refreshTokenData.data?.updateVerifyCustomUser?.refreshTokenObject,
          );
          // リフレッシュトークンをCookieに保存
          setCookie(null, "refreshToken", parsedRefreshTokenData.refresh_token, {
            path: "/",
            maxAge: calcDate(parseFloat(parsedRefreshTokenData.expiration_date)),
          });
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          alert(error);
          console.error(error);
        }
      })();

      // tokenを使って更新する処理

      // バックエンドでtokenを検証し、フロントでエラーやローディングのハンドリングをおこなう
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <Layout meta={{ pageName: "Verify" }}>
      {isLoading ? (
        <div className="text-xl bg-yellow-500">loading...</div>
      ) : (
        <div>ローディングが終わりました。</div>
      )}
    </Layout>
  );
};

export default Verify;
