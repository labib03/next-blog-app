import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-white">
          <span>
            <ArrowLeftIcon className="h-6 w-6 mr-2" />
          </span>
          Go Back to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
