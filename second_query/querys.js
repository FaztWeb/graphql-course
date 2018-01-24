query getSingleCourse($courseID: Int!) {
  course(id: $courseID) {
    title
    author
    description
    topic
    url
  }
}

{
  "courseID": 3
}

// second
query getCoursesForTopic($courseTopic: String!) {
  courses(topic: $courseTopic) {
    title
    author
    description
    topic
    url
  }
}

{
  "courseTopic": "Javascript"
}

// third
query getCoursesWithFragments($courseID1: Int!, $courseID2: Int!) {
  course1: course(id: $courseID1) {
    ...courseFields
  }
  course2: course(id: $courseID2) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}

{
  "courseID1": 1,
  "courseID2": 3
}

// Mutation

mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
