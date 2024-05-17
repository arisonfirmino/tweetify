export default function formatCreatedAt(createdAt: string): string {
  const currentDate = new Date();
  const tweetDate = new Date(createdAt);
  const diffInMilliseconds = currentDate.getTime() - tweetDate.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`;
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)}min`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)}h`;
  } else {
    return `${Math.floor(diffInSeconds / 86400)}d`;
  }
}
