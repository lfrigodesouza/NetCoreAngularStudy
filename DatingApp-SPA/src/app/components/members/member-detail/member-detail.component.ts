import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { AlertifyService } from '../../../services/alertify.service';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.user = data['user'];
    });

    this.galleryOptions = [{
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    }];
    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    for (let index = 0; index < this.user.photos.length; index++) {
      imageUrls.push(
        {
          small: this.user.photos[index].url,
          medium: this.user.photos[index].url,
          big: this.user.photos[index].url,
          description: this.user.photos[index].description
        });
    }
    return imageUrls;
  }

}
