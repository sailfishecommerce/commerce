import { PropsWithChildren } from "react";
import WidgetHeader from "./WidgetHeader";

interface Props {
  title: string;
  main?: boolean;
}

export default function WidgetView({
  children,
  title,
  main,
}: PropsWithChildren<Props>) {
  return (
    <>
      <div className="reward-chat-box rounded-xl bg-white flex flex-col z-30 h-3/5 fixed bottom-28 right-5 w-2/3">
        <div className="relative flex flex-col justify-center mx-auto items-center w-full">
          <WidgetHeader title={title} main={main} />
          <div className="body mt-4 w-4/5 flex flex-col justify-center items-center mx-auto">
            {children}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .reward-chat-box {
            box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
            overflow: hidden;
          }
          .body {
            overflow-y: scroll;
          }
          @media (max-width: 768px) {
            .reward-chat-box {
              overflow: scroll;
            }
          }
        `}
      </style>
    </>
  );
}
