import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosListComponent } from './fotos-list.component';

describe('FotosListComponent', () => {
  let component: FotosListComponent;
  let fixture: ComponentFixture<FotosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
