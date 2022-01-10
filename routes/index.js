const express = require("express");
const userController = require("../controller/userController");
const renderController = require("../controller/renderController");
const router = express.Router();

//frontend routes
router.get("/", renderController.renderHome);
router.get("/profile", renderController.renderProfile);
router.get("/about", renderController.renderAbout);
router.get("/competitions", renderController.renderCompetitions);
router.get("/workshops", renderController.renderWorkshops);
router.get("/guestlectures", renderController.renderGuestLectures);
router.get("/exhibits", renderController.renderExhibits);
router.get("/initiatives", renderController.renderInitiatives);
router.get("/highlights", renderController.renderHighlights);
router.get("/team", renderController.renderTeam);
router.get("/sponsors", renderController.renderSponsors);
router.get("/contact", renderController.renderContact);

router.post("/contact", userController.postContact);
//individual competition routes

//individual workshop routes

//posting a query in contact

//single webpages
//1. about
//2. profile
//3. guest lectures
//4. exhibits
//5. initiatives
//6. highlights
//7. team
//8. sponsors
//9. contact

module.exports = router;
