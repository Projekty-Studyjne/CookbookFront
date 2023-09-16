import { Component, Input, inject } from '@angular/core';
import { CommentService } from '../comment.service';
import { CommentResponse } from '../model/DTO/comment-response';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  @Input() id?: number;
  commentxd?: CommentResponse;

  private service: CommentService = inject(CommentService);

  constructor() {}

  ngOnInit() {
    if (this.id) {
      this.service.getCommentByRating(this.id).subscribe({
        next: (res : CommentResponse) => {
          this.commentxd = res;
        },
      });
    }
  }
}
