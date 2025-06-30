import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-cities',
    imports: [CarouselModule, RouterLink],
    templateUrl: './cities.component.html',
    styleUrl: './cities.component.scss'
})
export class CitiesComponent {

    // Owl Carousel
    citiesSlides: OwlOptions = {
		loop: true,
		margin: 15,
        rtl: true,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
        navText: [
			"<i class='flaticon-right-arrow'></i>",
			"<i class='flaticon-left-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 2
            },
            695: {
                items: 3
            },
            935: {
                items: 4
            },
            1115: {
                items: 4
            }
        }
    }

}