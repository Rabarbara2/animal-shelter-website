import NewsCard from "./news-card";

export default function NewsSection() {
  return (
    <div className="flex w-5/6 flex-col items-center gap-10 bg-pink-900 p-6 ">
      <div className="p-12 text-center text-5xl font-medium text-white">
        Shelter news
      </div>
      <NewsCard
        shortText="Dog found near orange streat. He's got a collar, we're looking for his owner"
        category="Animal Found"
      />
      <NewsCard
        shortText="We are currently looking for a cat petter. We offer good salary. More info in this article."
        category="Job offer"
      />
      <NewsCard shortText="We want to thank everyone!" category="Thank you!" />
    </div>
  );
}
