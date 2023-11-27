import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../shared/models/Tag';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  tags?: Tag[];

  @Input()
  foodPageTags?: string[];

  @Input()
  justifyContent: string = 'center';

  constructor(private foodService: FoodService) {
    if (!this.foodPageTags) {
      this.tags = this.foodService.getAllTags();
    }
  }
}
