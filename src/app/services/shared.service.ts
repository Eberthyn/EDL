import { Injectable } from '@angular/core';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
  ) { }

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

  /* Abre com menu recolhido em Tablet e smartphone */
  resize() {
    let tam = screen.width;
    if (tam <= 980) {
      $("#sidebar, #menuLateral").addClass("esconder");
      $("#sidebar").removeClass("col-md-2");
      $("#sidebarButton").addClass("open");
      $("#content").addClass("col-md-12");
      $("#content").removeClass("col-md-10");
    } else {
      $("#sidebar, #menuLateral").removeClass("esconder");
      $("#sidebar").addClass("col-md-2");
      $("#sidebarButton").removeClass("open");
      $("#content").removeClass("col-md-12");
      $("#content").addClass("col-md-10");
    }

    // Recolhe menu ao reduzir tela no desktop //
    $(window).on("resize", function () {
      let win = screen.width;

      if (win < 980) {
        $("#sidebar, #menuLateral").addClass("esconder");
        $("#sidebar").removeClass("col-md-2");
        $("#sidebarButton").addClass("open");
        $("#content").addClass("col-md-12");
        $("#content").removeClass("col-md-10");
      } else {
        $("#sidebar, #menuLateral").removeClass("esconder");
        $("#sidebar").addClass("col-md-2");
        $("#sidebarButton").removeClass("open");
        $("#content").removeClass("col-md-12");
        $("#content").addClass("col-md-10");
      }
    });
  }

  /*Collapse Sidebar*/
  toggleSidebar() {
    $("#sidebar, #menuLateral").toggleClass("esconder");
    $("#content").toggleClass("col-md-12 col-md-10");
    $("#sidebarButton").toggleClass("open");
  };
}
