import useUserDetails from "@/hooks/useUserDetails";

export default function CheckoutWelcomeBanner() {
  const [userDetails, status] = useUserDetails();

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-4">
      {status === "error" ? (
        "unable to fetch user data"
      ) : status === "loading" ? (
        "loading ..."
      ) : (
        <div className="flex items-center">
          {userDetails !== null ? (
            <span className="font-bold ">
              Hello{" "}
              <span className="text-blue-500">{userDetails.firstName}</span>,
              Thanks for choosing Sailfish.
            </span>
          ) : (
            <span className="guest font-bold text-decoration-underline">
              Hello Guest, Thanks for choosing Sailfish.
            </span>
          )}
        </div>
      )}
    </div>
  );
}
