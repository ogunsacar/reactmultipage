import { useLocation } from "react-router";

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);

  const name = queryParams.get("name");

  console.log(name);
  return (
    <div>
      <h2>Contact</h2>
      <h3>Hey {name}, contact us here...</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex,
        deserunt praesentium voluptatem molestiae ullam a dolorum quibusdam
        magnam error fugiat. Libero perferendis dolorum quasi perspiciatis
        corrupti assumenda fuga id?
      </p>
    </div>
  );
}
