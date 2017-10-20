import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleBoxComponent } from './title-box.component';

describe('TitleBoxComponent', () => {
  describe('When the title is clicked', () => {
    let titleBox: TitleBoxComponent;
    let titleClicked: jasmine.Spy;

    // Arrange
    beforeEach(() => {
      titleBox = new TitleBoxComponent();
      titleClicked = spyOn(titleBox.titleClicked, 'emit');
    });

    it('should trigger the event "titleClicked"', () => {
      // Act
      titleBox.sendPing();

      // Assert
      expect(titleClicked).toHaveBeenCalled();

      // Bonus for fast typing attendees
      expect(titleClicked).toHaveBeenCalledTimes(1);
      expect(titleClicked).toHaveBeenCalledWith('Hello from TitleCompoenent');
    });
  });

  describe('[ShallowTest] When the title is clicked', () => {
    let titleBox: TitleBoxComponent;
    let fixture: ComponentFixture<TitleBoxComponent>;
    let titleClicked: jasmine.Spy;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TitleBoxComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TitleBoxComponent);
      titleBox = fixture.componentInstance;
      titleClicked = spyOn(titleBox.titleClicked, 'emit');
    });

    it('should call the event "titleClicked" only one tine', () => {
      // By -> @angular/platform-browser
      // DebugElement -> @angular/core
      const title: DebugElement = fixture.debugElement.query(By.css('h3'));
      title.nativeElement.click();

      expect(titleClicked).toHaveBeenCalledTimes(1);
    });
  });
});
