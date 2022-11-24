import React from "react";

export default function FrequentlyAskedQuestions() {
  let acc;
  if (typeof window !== "undefined") {
    acc = window.document.getElementsByClassName("accordion acc-title");
    console.log("acc", acc);

    console.log("acc", acc);
    $(document).ready(function () {
      $(".accordion.actop").click(function () {
        console.log("clicked...");
        const clickedElement = $(this);

        $(".accordion.actop")
          .not(this)
          .each(function () {
            console.log("we get..");
            $(this).find(".panel").removeAttr("style");
            $(this).removeClass("active");
          });

        if ($(this).find(".panel").attr("style")) {
          $(this).removeClass("active");
          $(this).find(".panel").removeAttr("style");
        } else {
          $(this)
            .find(".panel")
            .css("max-height", $(this).find(".panel").prop("scrollHeight") + "px");
          $(this).addClass("active");
        }
      });
    });
  }

  // function Clicked() {
  //     console.log("clicked...");
  //     const clickedElement = $(".accordion.actop");

  //     $(".accordion.actop")
  //       .not(clickedElement)
  //       .each(function () {
  //         console.log("we get..");
  //         $(clickedElement).find(".panel").removeAttr("style");
  //         $(clickedElement).removeClass("active");
  //       });

  //     if ($(clickedElement).find(".panel").attr("style")) {
  //       $(clickedElement).removeClass("active");
  //       $(clickedElement).find(".panel").removeAttr("style");
  //     } else {
  //       $(clickedElement)
  //         .find(".panel")
  //         .css("max-height", $(clickedElement).find(".panel").prop("scrollHeight") + "px");
  //       $(clickedElement).addClass("active");
  //     }
  //   };
  return (
    <>
      <div className="faq-separator"></div>

      <div id="faq" className="faq-section">
        <div className="faq-section-title">Frequently Asked Questions</div>

        <div className="accordion actop" id="">
          <button className="accordion acc-title">How do I participate in private sale?</button>
          <div className="panel">
            <span className="accordian-answer">Answer:</span>
            <p className="acc-answer-text">
              Private sale is open to limited number of investors and interested investors must reach out to the team
              for details of payment option and minimum required investment.{" "}
            </p>
          </div>
        </div>

        <div className="accordion actop">
          <button className="accordion acc-title">Who are the prominent partners?</button>
          <div className="panel">
            <span className="accordian-answer">Answer:</span>
            <p className="acc-answer-text">
              yPredict.ai is backed by Heisenberg Research inc, Family based quant trading firm & research lab. Token
              sale offering, KYC and Audits are being conducted by WolfPad.
            </p>
          </div>
        </div>
        <div className="accordion actop">
          <button className="accordion acc-title">Which chain is this project on?</button>
          <div className="panel">
            <span className="accordian-answer">Answer:</span>
            <p className="acc-answer-text">
              <b>Polygon Matic Chain</b>, Go to chainlist.org to add Polygon Chain to your wallet networks.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
