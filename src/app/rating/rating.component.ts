import { Component, Input, inject } from '@angular/core';
import { RatingService } from '../rating.service';
import { RatingResponse } from '../model/DTO/rating-response';
import { CommentService } from '../comment.service';
import { CommentResponse } from '../model/DTO/comment-response';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  @Input() id?: number;
  ratings?: RatingResponse[];
  commentxd?: CommentResponse;

  private service: RatingService = inject(RatingService);
  constructor() {}

  ngOnInit() {
    if (this.id) {
      this.service.getRatingsByRecipe(this.id).subscribe({
        next: (res) => {
          this.ratings = res;
        },
      });
    }
  }

}
