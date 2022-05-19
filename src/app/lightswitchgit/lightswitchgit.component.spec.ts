import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchgitComponent } from './lightswitchgit.component';

describe('LightswitchgitComponent', () => {
  let component: LightswitchgitComponent;
  let fixture: ComponentFixture<LightswitchgitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightswitchgitComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should return 'Light is OFF'", () => {

  });

  it("should return 'The Light is OFF'", () => {
    fixture = TestBed.createComponent(LightswitchgitComponent);
    component = fixture.componentInstance;

    expect(component.message).toBe("The light is Off");
  })
  it("should return 'The Light is On'", () => {
    fixture = TestBed.createComponent(LightswitchgitComponent);
    component = fixture.componentInstance;
    component.clicked();
    expect(component.message).toBe("The light is On");
  })

  it("should return 'The Light is OFF'", () => {
    fixture = TestBed.createComponent(LightswitchgitComponent);
    component = fixture.componentInstance;
    component.clicked();
    component.clicked();
    expect(component.message).toBe("The light is Off");
  })
});
