import React from "react";
import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function Meetup() {
  return (
    <MeetupDetails
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Straubinger_Stadtbild.jpg/640px-Straubinger_Stadtbild.jpg"
      title="First Meetup"
      address="Some Street 5, Some city"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Straubinger_Stadtbild.jpg/640px-Straubinger_Stadtbild.jpg",
        title: "First Meetup",
        id: meetupId,
        address: "Some Street 5, Some city",
        description: "This is a first meetup",
      },
    },
    revalidate: 10,
  };
}
