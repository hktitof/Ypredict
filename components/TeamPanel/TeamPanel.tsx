import React from "react";
/* eslint-disable @next/next/no-img-element */
export default function TeamPanel() {
  if (typeof window !== "undefined") {
    let acc = window.document.getElementsByClassName("accordion acc-title");
    console.log("acc", acc);
  }

  function showHideTeamMembers(department) {
    console.log("showHideTeamMembers - ", department);
    if (department === "all") {
      $("div.team-member").removeClass("team-member-hidden");
    } else {
      $("div.team-member").each(function (index) {
        if ($(this).hasClass(department)) {
          $(this).removeClass("team-member-hidden");
        } else {
          $(this).addClass("team-member-hidden");
        }
      });
    }
  }

  return (
    <div className="meettheteam-section">
      <div className="meettheteam-title">
        Meet Our 10x <span className="meettheteam-colored">team</span>
      </div>

      <div className="meettheteam-subtitle">
        At yPredict we beleive every blockchain innovation is fueled by a passion, A passion to make digital currencies
        accessible & reliable.
      </div>

      {/* partial:index.partial.html  */}
      <div className="tab-wrapper">
        <div className="tabs">
          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-1"
              defaultChecked={true}
              className="tab-switch"
              onClick={() => showHideTeamMembers("all")}
            />
            <label htmlFor="tab-1" className="nav-header-links">
              All
            </label>
          </div>
          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-2"
              className="tab-switch"
              onClick={() => showHideTeamMembers("developer")}
              //   onClick={showHideTeamMembers("developer")}
            />
            <label htmlFor="tab-2" className="nav-header-links">
              Developers
            </label>
          </div>
          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-3"
              className="tab-switch"
              // onclick="showHideTeamMembers('ai-ml')"
              onClick={() => showHideTeamMembers("ai-ml")}
            />
            <label htmlFor="tab-3" className="nav-header-links">
              AI/ML
            </label>
          </div>

          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-4"
              className="tab-switch"
              // onclick="showHideTeamMembers('analyst')"
              onClick={() => showHideTeamMembers("analyst")}
            />
            <label htmlFor="tab-4" className="nav-header-links">
              Analyst
            </label>
          </div>

          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-5"
              className="tab-switch"
              // onclick="showHideTeamMembers('designer')"
              onClick={() => showHideTeamMembers("designer")}
            />
            <label htmlFor="tab-5" className="nav-header-links">
              Designers
            </label>
          </div>

          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-6"
              className="tab-switch"
              // onclick="showHideTeamMembers('marketer')"
              onClick={() => showHideTeamMembers("marketer")}
            />
            <label htmlFor="tab-6" className="nav-header-links">
              Marketers
            </label>
          </div>

          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-7"
              className="tab-switch"
              // onclick="showHideTeamMembers('advisors')"
              onClick={() => showHideTeamMembers("advisors")}
            />
            <label htmlFor="tab-7" className="nav-header-links">
              Advisors
            </label>
          </div>
        </div>

        <div className="meettheteam-image-section">
          <div className="team-member marketer advisors">
            <div className="team-image-overlay"></div>
            <img src="img/raj_sharma.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Raj Sharma</span>
                <span className="team-member-designation">(CEO)</span>
              </div>

              <div className="team-member-profile">
                {/* <!-- <img src="img/github.svg" className="profile-social-icons" /> --> */}

                <a href="https://www.linkedin.com/in/rajsharma2020/">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member" />
                </a>
                {/* <!-- <img src="img/behance.svg" className="profile-social-icons" /> --> */}
              </div>
            </div>
          </div>

          <div className="team-member developer">
            <div className="team-image-overlay"></div>
            <img src="img/chirag_purohit.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Chirag Purohit</span>
                <span className="team-member-designation">(CTO)</span>
              </div>

              <div className="team-member-profile flex">
                <a href="https://github.com/chiragpurohit71085">
                  <img src="img/github.svg" className="profile-social-icons" alt="team member" />
                </a>
                <a href="https://www.linkedin.com/in/chiragpurohit/">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member" />
                </a>
                {/* <!-- <img src="img/behance.svg" className="profile-social-icons" /> --> */}
              </div>
            </div>
          </div>

          <div className="team-member ai-ml analyst">
            <div className="team-image-overlay"></div>
            <img src="img/siroj_nuriv.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Siroj Nuriev</span>
                <span className="team-member-designation">(AI/ML)</span>
              </div>

              <div className="team-member-profile flex">
                <a href="https://github.com/NurievSiroj">
                  <img src="img/github.svg" className="profile-social-icons" alt="team member" />
                </a>
                <a href="https://www.linkedin.com/in/sirojiddin-nuriev-5639b9116/">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member" />
                </a>
                {/* <!-- <img src="img/behance.svg" className="profile-social-icons" /> --> */}
              </div>
            </div>
          </div>

          <div className="team-member designer">
            <div className="team-image-overlay"></div>
            <img src="img/muhammad_hashim.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Hashim</span>
                <span className="team-member-designation">(UI/UX)</span>
              </div>

              <div className="team-member-profile flex">
                {/* <!-- <img src="img/github.svg" className="profile-social-icons" /> --> */}
                <a href="https://www.linkedin.com/in/muhammad-hashim-868a281a5">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member" />
                </a>
                <a href="https://www.behance.net/hashimjahangiri">
                  <img src="img/behance.svg" className="profile-social-icons" alt="team member" />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member developer">
            <div className="team-image-overlay"></div>
            <img src="img/haidar_ali.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Haidar Ali</span>
                <span className="team-member-designation">(Blockchain Dev)</span>
              </div>
              <div className="team-member-profile flex">
                <a href="http://www.github.com/haidaralimasu">
                  <img src="img/github.svg" className="profile-social-icons" alt="team member" />
                </a>
                <a href="https://www.linkedin.com/in/haidaralimasu">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member" />
                </a>
                {/* <!-- <img src="img/behance.svg" className="profile-social-icons" /> --> */}
              </div>
            </div>
          </div>

          <div className="team-member developer">
            <div className="team-image-overlay"></div>
            <img src="img/jitin_rathi.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Jitin Rathi</span>
                <span className="team-member-designation">(FE Dev)</span>
              </div>
              <div className="team-member-profile flex">
                <a href="https://github.com/jitinrathi910949">
                  <img src="img/github.svg" className="profile-social-icons" alt="team member" />
                </a>
                <a href="http://www.linkedin.com/in/jitinrathi910949">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member" />
                </a>
                {/* <!-- <img src="img/behance.svg" className="profile-social-icons" /> --> */}
              </div>
            </div>
          </div>

          <div className="team-member developer">
            <div className="team-image-overlay"></div>
            <img src="img/Parv_Garg.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Parv Garg</span>
                <span className="team-member-designation">(Blockchain Dev)</span>
              </div>
              <div className="team-member-profile flex">
                <a href="https://github.com/parv3213">
                  <img src="img/github.svg" className="profile-social-icons" alt="team member"/>
                </a>
                <a href="https://www.linkedin.com/in/parv3213">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member" />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member developer">
            <div className="team-image-overlay"></div>
            <img src="img/elisha_bulalu.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Elisha Bulalu</span>
                <span className="team-member-designation">(Blockchain Dev)</span>
              </div>
              <div className="team-member-profile flex">
                <a href="https://github.com/Bulalu">
                  <img src="img/github.svg" className="profile-social-icons" alt="team member" />
                </a>
                <a href="https://linkedin.com/in/elisha-bulalu">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member" />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member developer">
            <div className="team-image-overlay"></div>
            <img src="img/Dmytro_Ruptash.png" className="team-member-img" alt="team member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Dmytro Ruptash</span>
                <span className="team-member-designation">(FE Dev)</span>
              </div>
              <div className="team-member-profile flex">
                <a href="https://github.com/DmitriyR54">
                  <img src="img/github.svg" className="profile-social-icons" alt="team member" />
                </a>
                <a href="https://linkedin.com/in/dmytro-ruptash">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member"/>
                </a>
              </div>
            </div>
          </div>

          <div className="team-member developer advisors">
            <div className="team-image-overlay"></div>
            <img src="img/Alex_Sakai.png" className="team-member-img" alt="team member"/>
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Alex Sakai</span>
                <span className="team-member-designation">(Blockchain Dev)</span>
              </div>
              <div className="team-member-profile flex">
                <a href="http://github.com/best-lucky1030">
                  <img src="img/github.svg" className="profile-social-icons" alt="team member"/>
                </a>
                <a href="https://www.linkedin.com/in/alex-sakai-4b4557233">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="team member"/>
                </a>
              </div>
            </div>
          </div>

          <div className="team-member marketer">
            <div className="team-image-overlay"></div>
            <img src="img/Shauhard_Rana.png" className="team-member-img" alt="team-member" />
            <div className="team-member-info info-1">
              <div className="team-name-and-designation">
                <span className="team-member-name">Shauhard Rana</span>
                <span className="team-member-designation">(KPL Marketing)</span>
              </div>
              <div className="team-member-profile flex">
                {/* <!---<a href="https://github.com/DmitriyR54"><img src="img/github.svg" className="profile-social-icons" /></a> ---> */}
                <a href="https://www.linkedin.com/in/shauhard-rana-632a02236/">
                  <img src="img/linkedin.svg" className="profile-social-icons" alt="profile social icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* partial  */}
    </div>
  );
}
