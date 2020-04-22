import { Component, OnInit } from '@angular/core';
import { ComponentService } from "../../component.service";

@Component({
  selector: 'app-testmod',
  templateUrl: './testmod.component.html',
  styleUrls: ['./testmod.component.css']
})
export class TestmodComponent implements OnInit {

  public postinTestmodule;
  constructor(public compService: ComponentService) { }

  ngOnInit(): void {
      this.compService.postTotestModule.subscribe(post => this.postinTestmodule = post)
  }

}
