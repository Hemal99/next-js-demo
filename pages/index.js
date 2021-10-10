import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Straubinger_Stadtbild.jpg/640px-Straubinger_Stadtbild.jpg",
    address: "",
    description: "",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Straubinger_Stadtbild.jpg/640px-Straubinger_Stadtbild.jpg",
    address: "",
    description: "",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: { meetups: DUMMY_MEETUP },
  };
};

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//     revalidate: 10,
//   };
// }
