export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById("modal-template");
  }

  show() {
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      this.modalElement = modalElements.querySelector(".modal");
      this.backdropElement = modalElements.querySelector(".backdrop");

      // 실제 보여줄 콘텐츠
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      this.modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement("afterbegin", this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      // fallback code
      alert(this.fallbackText);
    }
  }

  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement);
      // 최신 브라우저 사용시 -> this.modalElement.remove() 사용가능
      document.body.removeChild(this.backdropElement);

      this.modalElement = null;
      this.backdropElement = null;
    }
  }
}
