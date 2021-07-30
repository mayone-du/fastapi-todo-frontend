import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { ThemeChanger } from "src/components/ThemeChanger";
import { useCreateTaskMutation } from "src/graphql/schemas/schema";

const Index: NextPage = () => {
  const [createTaskMutation] = useCreateTaskMutation();
  const handleClick = async () => {
    await createTaskMutation({
      variables: {
        title: "sampletitle",
        content: "sampleContent",
        thumbnail: "thumbnail",
      },
    });
  };
  return (
    <Layout meta={{ pageName: "Index" }}>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-5xl">Index Page</div>
        <ThemeChanger />
        <button className="block p-4 border" onClick={handleClick}>
          作成
        </button>
      </div>
    </Layout>
  );
};

export default Index;
