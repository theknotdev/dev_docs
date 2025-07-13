import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">文档介绍</h1>
      <ul className="text-left mx-auto max-w-2xl">
        <li className="mb-2">
          <p className="text-fd-muted-foreground">
            本文档由本人撰写，部分内容由 AI 生成，并经过本人
            review。用于记录和分享开发过程中的经验和教训。
          </p>
        </li>
        <li className="mb-2">
          <p className="text-fd-muted-foreground">
            访问 {" "}
            <Link
              href="/docs"
              className="text-fd-foreground font-semibold underline"
            >
              /docs
            </Link>{" "}
            查看完整文档。
          </p>
        </li>
      </ul>
    </main>
  );
}
