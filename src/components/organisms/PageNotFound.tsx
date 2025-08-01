import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { PATH } from "@/constants/paths";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center px-9 bg-white">
      <Image
        src="/images/404.jpeg"
        alt="404 Not Found"
        layout="responsive"
        objectFit="contain"
        priority
        width={200}
        height={200}
        className="w-full max-w-screen-sm mb-6"
      />

      <Link href={PATH.HOME}>
        <Button className="text-blue-300 bg-red-200 md:-mt-0 hover:opacity-80 px-6 text-base rounded-lg shadow-lg">
          Trở về trang chủ
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
