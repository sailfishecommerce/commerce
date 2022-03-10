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
      <div className="reward-chat-box rounded-xl bg-white flex flex-col z-30 fixed bottom-28 right-5">
        <div className="content flex flex-col mx-auto items-center w-full px-0">
          <WidgetHeader title={title} main={main} />
          <div className="widget-body w-11/12 ml-3 pt-0 pr-3 flex flex-col justify-center items-center mx-auto">
            {children}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .reward-chat-box {
            box-shadow: 0 0 13px 0 rgb(0 0 0 / 9%);
            overflow: hidden;
            width: 400px;
          }
          .content {
            height: 500px;
          }
          .widget-body {
            overflow-y: scroll;
            height: 400px;
          }
          @media (max-width: 768px) {
            .reward-chat-box {
              width: 350px;
            }
          }
        `}
      </style>
    </>
  );
}
