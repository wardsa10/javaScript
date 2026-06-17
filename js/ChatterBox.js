const users = [
  { id: 1, username: "dania", followers: 1200, verified: true },
  { id: 2, username: "omar", followers: 350, verified: false },
  { id: 3, username: "luna", followers: 2400, verified: true },
  { id: 4, username: "zain", followers: 90, verified: false },
  { id: 5, username: "maya", followers: 800, verified: true },
];
const posts = [
  {
    id: 1,
    userId: 1,
    title: "Why JavaScript is Weird",
    content: "JavaScript has strange but interesting behavior.",
    likes: 1500,
    category: "Programming",
  },
  {
    id: 2,
    userId: 3,
    title: "Best Gaming Setup",
    content: "Today I will show my gaming room.",
    likes: 2200,
    category: "Gaming",
  },
  {
    id: 3,
    userId: 1,
    title: "React Tips",
    content: "Use components to organize your UI.",
    likes: 900,
    category: "Programming",
  },
  {
    id: 4,
    userId: 5,
    title: "Morning Routine",
    content: "Small habits can change your day.",
    likes: 700,
    category: "Lifestyle",
  },
];

const usersCard = users.map(
  (user) =>
    `${user.username}-${user.followers}- ${
      user.verified ? "Active User" : " user not active"
    }`,
);
console.log(usersCard);

const postMoreThan100 = posts.filter((post) => {
  if (post.likes > 100) return post;
});

console.log(postMoreThan100);

const mostPopularUser = users.reduce((popular, user) =>
  user.followers > popular.followers ? user : popular,
);

console.log(mostPopularUser);

const userWithPosts = users.map(user => ({
 ...user,
  posts: posts.filter(post=>user.id===post.userId)
}))

console.log(userWithPosts);


const calculateTotalLikes = posts.reduce((sum, post) => sum + post.likes, 0)
console.log(calculateTotalLikes);

const verifiedUser = users.some(user => user.verified)

console.log(verifiedUser);


const checkPlatformQuality = posts.every((post) => post.title && post.content);
console.log(checkPlatformQuality);


const upperCasePosts = posts.filter((post) => post.title.toUpperCase());
console.log(upperCasePosts);
const postsGaming = posts.filter((post) => {return post.category === "Gaming" })

console.log(postsGaming);


const sortedUsersByFollowers = users.sort((a, b) => b.followers - a.followers)
console.log(sortedUsersByFollowers);


const searchedUsername = "dania"

const findDania = users.find(user => user.username === "dania")
console.log(findDania);
