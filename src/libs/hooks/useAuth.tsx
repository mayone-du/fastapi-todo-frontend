import { destroyCookie, parseCookies } from "nookies";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useCreateCustomUserMutation } from "src/apollo/schema";
// import { calcDate } from "src/libs/calcDate";

export const useAuth = () => {
  const [createCustomUserMutation] = useCreateCustomUserMutation();
  // TODO: reducerに置き換え
  const [inputUserName, setInputUserName] = useState("test name");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  }, []);
  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  }, []);

  // 入力欄のバリデーション
  const validateInputs = useCallback((): { isFormError: boolean } => {
    // メールアドレスが空文字
    if (inputEmail === "") {
      toast.error("正しい形式でメールアドレスを入力してください。");
      return { isFormError: true };
      // パスワードが4文字以下
    } else if (inputPassword.length <= 4) {
      toast.error("パスワードは5文字以上で入力してください。");
      return { isFormError: true };
    } else {
      return { isFormError: false };
    }
  }, [inputEmail, inputPassword]);

  // signUp
  const handleSignUp = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { isFormError } = validateInputs();
    if (!isFormError) {
      await createCustomUserMutation({
        variables: { username: inputUserName, email: inputEmail, password: inputPassword },
      });
      setInputUserName("");
      setInputEmail("");
      setInputPassword("");
    }
  };

  const handleSignOut = useCallback(() => {
    const cookies = parseCookies();
    cookies.accessToken && destroyCookie(null, "accessToken", { path: "/", maxAge: -1 });
    cookies.refreshToken && destroyCookie(null, "refreshToken", { path: "/", maxAge: -1 });
    toast("ログアウトしました。");
  }, []);
  return {
    inputEmail,
    setInputEmail,
    inputPassword,
    setInputPassword,
    handleEmailChange,
    handlePasswordChange,
    handleSignUp,
    handleSignOut,
  };
};
