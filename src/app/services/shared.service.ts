import { Injectable } from '@angular/core';
import * as $ from "jquery";
import imageMapResize from 'image-map-resizer';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  // Fixa o Menu Superior
  onWindowScroll() {
    if (window.scrollY === 0) {
      $('.navbar').removeClass('fixed-top');
      $('#row-main').css('padding-top', '0');
      $('.navbar').css('box-shadow', '0px 0px 0px rgba(0,0,0,0.5)');
    } else {
      $('.navbar').addClass('fixed-top');
      $('#row-main').css('padding-top', $('.navbar').outerHeight() + 'px');
      $('.navbar').css('box-shadow', '0px 2px 2px rgba(0,0,0,0.5)');
    }
  }

  /*Collapse Sidebar*/
  toggleSidebar() {
    $("#menuLateral, #sidebar").toggleClass("esconder");
    $("#content").toggleClass("col-md-12 col-md-10");
    $("#sidebarButton").toggleClass("open");
    $("#sidebarButton2").toggleClass("open");
    imageMapResize();
  };

  /* Abre com menu recolhido em Tablet e smartphone */
  windowSize() {
    if (window.innerWidth <= 980) {
      $("#menuLateral").addClass("esconder");
      $('#sidebar').addClass('esconder');
      $("#sidebarButton").addClass("open");
      $("#sidebarButton2").addClass("open");
      $("#content").addClass("col-md-12");
      $("#content").removeClass("col-md-10");
    } else {
      $("#menuLateral").removeClass("esconder");
      $('#sidebar').removeClass('esconder');
      $("#sidebarButton").removeClass("open");
      $("#sidebarButton2").removeClass("open");
      $("#content").removeClass("col-md-12");
      $("#content").addClass("col-md-10");
    }
  }
}