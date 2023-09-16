export class CommentRequest {
  comment: string;
  ratingId: number;

  constructor(comment: string, ratingId: number) {
    this.comment = comment;
    this.ratingId = ratingId;
  }
}
