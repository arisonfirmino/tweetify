"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/app/components/container";
import SepSession from "@/app/components/sep-session";
import axios from "axios";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Post from "@/app/components/post";
import { PostProps } from "@/app/components/app";
import Comment from "@/app/components/comment";
import CommentForm from "@/app/components/comment-form";

interface CommentProps {
  id: string;
  name: string;
  email: string;
  imageUrl: string | undefined;
  text: string;
  postId: string;
  created_at: string;
}

export default function CommentsPage() {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<PostProps | null>(null);
  const [comments, setComments] = useState<CommentProps[]>([]);

  const findPost = useCallback(async () => {
    await axios.get(`https://api-tweetify.onrender.com/post?id=${id}`).then((response) => {
      setPost(response.data);
      setComments(response.data.comments);
    });
  }, [id]);

  useEffect(() => {
    findPost();
  }, [findPost]);

  const deleteComment = async (id: string) => {
    await axios.delete(`https://api-tweetify.onrender.com/comment?id=${id}`).then(() => {
      if (findPost) {
        findPost();
      }
    });
  };

  return (
    <Container>
      <main className="flex min-h-screen w-full flex-col gap-5 border-solid border-gray-400 p-5 pb-[70px] md:max-w-[600px] md:border-x">
        <SepSession>
          <Link
            href="/"
            className="flex items-center gap-1 active:text-gray-300"
          >
            <ArrowLeftIcon size={14} />
            Voltar
          </Link>
        </SepSession>

        {post && (
          <Post
            id={post.id}
            name={post.name}
            email={post.email}
            imageUrl={post.imageUrl}
            text={post.text}
            likes={post.likes}
            comments={post.comments}
            created_at={post.created_at}
          />
        )}

        <SepSession>Comentários</SepSession>

        <div className="flex flex-col gap-5">
          {comments
            .slice()
            .reverse()
            .map((comment, index) => (
              <Comment
                key={comment.id}
                id={comment.id}
                name={comment.name}
                email={comment.email}
                imageUrl={comment.imageUrl}
                text={comment.text}
                created_at={comment.created_at}
                index={index}
                handleClick={() => deleteComment(comment.id)}
              />
            ))}
        </div>

        <CommentForm id={id} findPost={findPost} />
      </main>
    </Container>
  );
}
