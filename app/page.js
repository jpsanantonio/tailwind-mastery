import Message from "@/components/Message";

export default function Home() {
  return (
    <>
      {[...Array(40)].map(() => (
        <Message />
      ))}
    </>
  );
}
