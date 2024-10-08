import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import SinglePost from "@/components/resources/SinglePost";

export const metadata = {
  title: "Single Post || NFT STYLE ",
};

export default function SinglePostPage({ params }) {
  return (
    <>
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <SinglePost id={params.id} />
      </main>
      <Footer1 />
    </>
  );
}
