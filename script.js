
const tarotDeck = [
      {
        id: 0,
        name: "The Fool",
        arcana: "Major",
        suit: null,
        number: 0,
        image: "./images/The Fool.jpg",
        keywords: "New Road Opens",
        meaning:
          " A doorway has opened that logic cannot fully explain. Your new life path is visible; beginnings and opportunities are calling to you. You feel young at heart, hopeful, and courageous. There is an energy for spontaneous action, innocence, and freedom. The Fool arrives when your soul is ready to leap before certainty appears.  Trust what you once feared with brave vulnerability; say yes to the spiritual leap of faith. Trust the pull toward the unknown. What looks reckless to others may be divine timing."
      },
      {
        id: 1,
        name: "The Magician",
        arcana: "Major",
        suit: null,
        number: 1,
        image: "./images/The Magician.jpg",
        keywords: "Focus Creates Reality",
        meaning:
          "Your energy is magnetic right now. You can make dreams become a reality. You are stepping into your personal power, and you have everything you need to accomplish your goals. The conditions are just right for success; it’s time to act. The Magician reminds you that manifestation begins when focused intention, emotion, and action align. This will feel natural as you make your intentions clear, use your skills to create results, and reclaim your agency.  You already possess the tools required — the challenge is believing in your ability to wield them."
      },
      {
        id: 2,
        name: "The High Priestess",
        arcana: "Major",
        suit: null,
        number: 2,
        image: "./images/The High Priestess.jpg",
        keywords: "Truth is Subtle",
        meaning:
          "Something important is hidden beneath the surface and your intuition is expanding as you grow in confidence. Listen beneath the words and read the room as your inner voices speak to you.  Follow your instincts to the next level of learning. Look carefully at dreams, repeated symbols, and things that you don’t normally notice that seem to jump out or resonate with you. There is hidden knowledge, psychic awareness, and inner wisdom at play revealing deep emotions and work you do in secret. The High Priestess appears when you sense you are on the right path and asks you to trust intuition over external noise."
      },
      {
        id: 3,
        name: "The Empress",
        arcana: "Major",
        suit: null,
        number: 3,
        image: "./images/The Empress.jpg",
        keywords: "Abundance Through Care",
        meaning:
          "Abundance grows where care is given. The Empress indicates happiness, beauty, and a nurturing home. A good omen for relationship comment and stability where you received instead of chase. This card signals creativity, fertility, emotional nourishment, and deep connection to beauty. Her appearance shows you have a positive mother-figure warmth to your energy that can heal both yourself and others."
      },
      {
        id: 4,
        name: "The Emperor",
        arcana: "Major",
        suit: null,
        number: 4,
        image: "./images/The Emperor.jpg",
        keywords: "Stabilize the Chaos",
        meaning:
          "Structure creates freedom. A trustworthy father figure or partner offers advice, protection, or support. He is an authoritarian, old-fashioned, with strength of purpose.  The Emperor appears when discipline, boundary protection, or decisive leadership are required and healthy structure with clear roles allow order to rule predicting action. Stand firmly in your authority without becoming emotionally closed. Practical problems will be resolved in the long term."
      },
      {
        id: 5,
        name: "The Hierophant",
        arcana: "Major",
        suit: null,
        number: 5,
        image: "./images/The Hierophant.jpg",
        keywords: "Tradition Teaches",
        meaning:
          "Ancient wisdom seeks to guide you. Usually in the form of an authority figure whose presence can help solve a challenge. It is time to take advice from someone you trust. This card points toward spiritual study, mentorship, ritual, or tradition. You are about to embark on a new path of learning that will lead you to your soul’s purpose. Comment to learning the system and examine the beliefs you inherited. There is value in learning from established paths of sacred teachings to gain spiritual wisdom before reinventing your own."
      },
      {
        id: 6,
        name: "The Lovers",
        arcana: "Major",
        suit: null,
        number: 6,
        image: "./images/The Lovers.jpg",
        keywords: "Choose with Integrity",
        meaning:
          "A powerful, aligned choice is forming based on values, maturity, and foresight. There is emotional honesty, connection, and harmony indicating that previous conflicts will dissolve. The Lovers speaks not only of romance, but alignment. Its appearance suggests two people reuniting after conflict, outgrowing an environment, or taking a leap toward a goal. It advises you to ask yourself whether your decisions reflect your true values or temporary desires and adjust accordingly."
      },
      {
        id: 7,
        name: "The Chariot",
        arcana: "Major",
        suit: null,
        number: 7,
        image: "./images/The Chariot.jpg",
        keywords: "Victory Through Direction",
        meaning:
          "Momentum returns after a period of uncertainty. There is a drive for adventure. You have the power to use the force of your will to bring things together for your journey towards a relationship or career. You should pursue this important journey with consistency using a disciplined push showing mastery of your impulses. The Chariot represents focused willpower and emotional mastery. You are being asked to move forward despite distractions or fear with determination, focused ambition, and self-control to gain momentum and achieve victory."
      },
      {
        id: 8,
        name: "Justice",
        arcana: "Major",
        suit: null,
        number: 8,
        image: "./images/Justice.jpg",
        keywords: "Truth Balances",
        meaning:
          "Truth cannot remain hidden forever and when it comes to light give it a fair evaluation and own your part. Take a reasonable, pragmatic approach to challenges.  Justice represents accountability that heals, clarity, and energetic balance. Legal matters are resolved.  It foretells a favorable conclusion to an ongoing dispute provided it is deserved. What you give to the world eventually returns in equal measure."
      },
      {
        id: 9,
        name: "The Hermit",
        arcana: "Major",
        suit: null,
        number: 9,
        image: "./images/The Hermit.jpg",
        keywords: "Withdraw to See",
        meaning:
          "Retreat is not failure. Circumstances, possibly due to illness or injury both physical and emotional, dictate that you spend time alone. The Hermit calls for reflection, solitude, and deeper understanding. It invites you to go on a spiritual search within for the wisdom you seek, create space for clarity, and meet yourself with honesty. You will need to distance yourself familiar environments and people to gain perspective and heal.  It asks you to sit with yourself and turn your scope inward to gain wisdom. This indicates a need to do some deep solo work. Answers will come through silence rather than constant activity."
      },
      {
        id: 10,
        name: "Wheel of Fortune",
        arcana: "Major",
        suit: null,
        number: 10,
        image: "./images/Wheel of Fortune.jpg",
        keywords: "Cycle Changes",
        meaning:
          "Cycles are shifting unexpectedly in a twist of fate. Events may suddenly accelerate or change direction. This may come in the form of a pattern change, a luck opening, or a predestined moment. Time shifts at turning points favoring luck and opportunity as it is your turn to benefit from spontaneous success, enjoy it while it lasts. This card foretells this shift is to reveal a new creative pathway and better financial times allowing long-term plans to proceed without hinderance. The Wheel reminds you that fate and free will dance together — remain adaptable as circumstances evolve."
      },
{
        id: 11,
        name: "Strength",
        arcana: "Major",
        suit: null,
        number: 11,
        image: "./images/Strength.jpg",
        keywords: "Patience Wins",
        meaning:
          "Real power is calm, not forceful. It offers gentle courage, a tame inner critic, and steady confidence.  Strength appears when compassion, patience, and inner resilience are more effective than aggression. It indicates the possession of the inner courage to display emotional resilience through patience. Gentle control will achieve more than domination. Calmness is a superpower."
      },
{
        id: 12,
        name: "The Hanged Man",
        arcana: "Major",
        suit: null,
        number: 12,
        image: "./images/The Hanged Man.jpg",
        keywords: "Wait with Purpose",
        meaning:
          "Pause before acting and take a step back to gain a new perspective giving you fresh insight into the need to give up a belief or let good of a dream. The Hanged Man asks you to release control long enough to gain a new perspective. You may need to wait for someone else’s decision and there is little you can do about it because you can’t control others. Delays may be spiritual redirection.  Use this time to analyze the situation with detachment to see new opportunities from a distance instead of obsessing over the outcome. Pause to understand, surrender control, and pivot your perspective."
      },
{
        id: 13,
        name: "Death",
        arcana: "Major",
        suit: null,
        number: 13,
        image: "./images/Death.jpg",
        keywords: "Necessary Ending",
        meaning:
          "An ending is clearing space for transformation. Death rarely predicts physical death; instead, it marks the shedding of identities, habits, or attachments that no longer support growth. A powerful transition creates transformation and rebirth. This is the end of a life phase.  Old chapters close, roles are transformed, and attachment is released. Accept this change without resistance as it is making room for a blessing is disguise. "
      },
{
        id: 14,
        name: "Temperance",
        arcana: "Major",
        suit: null,
        number: 14,
        image: "./images/Temperance.jpg",
        keywords: "Harmony Returns",
        meaning:
          "Healing happens gradually at a sustainable moderate pace. There is a desire to meet in the middle and integrate emotions. Patience, balance, and moderation will be essential to control negative influences and opposing demands. Temperance encourages balance between extremes and patience with the unfolding process. There is potential for growth if you rely on experience and  use diplomacy to bring people together to make forward progress. Relationships can be repaired. Harmony is being rebuilt one step at a time."
      },
{
        id: 15,
        name: "The Devil",
        arcana: "Major",
        suit: null,
        number: 15,
        image: "./images/The Devil.jpg",
        keywords: "Temptation Revealed",
        meaning:
          "Something may be draining your energy through attachment, fear, temptation, or illusion. The Devil reveals an enslavement to an ideal where freedom has been surrendered — often unconsciously.  There is a danger that you are allowing lust, greed, or the desire for power to rule resulting in misdirected passion. This is a call to check all aspects of your life for illusion, material fixation, and compulsion. In relationships check for dead-end affairs, at work be on the look out for golden handcuffs, emotionally check yourself for unhealthy patterns.  The spell can be broken if you make the sacrifice now with course correction."
      },
{
        id: 16,
        name: "The Tower",
        arcana: "Major",
        suit: null,
        number: 16,
        image: "./images/The Tower.jpg",
        keywords: "Disruption Clarifies",
        meaning:
          "A false foundation of hope and ambition or tower of ego and pride is collapsing and there is nothing you can do about it. Loss, shock, insecurity, or the crumbling of a relationship or ideal beyond repair.  While unsettling, The Tower removes what cannot continue. Truth breaks an illusion, there is a sudden shakeup, and cracks are revealed. What survives this shift will be far more authentic and stable."
      },
{
        id: 17,
        name: "The Star",
        arcana: "Major",
        suit: null,
        number: 17,
        image: "./images/The Star.jpg",
        keywords: "Guidance Ahead",
        meaning:
          "Hope returns after darkness. You have clarity of purpose and great potential in creative matters. The Star is a sign of spiritual renewal, inspiration, and emotional healing. Past experiences give you the wisdom to make a dream come true.  There is a renewed vision for hope and faith. You are tending to your garden well and creative ideas will flourish as you create fertile ground for success and happiness. The universe is quietly guiding you toward restoration."
      },
{
        id: 18,
        name: "The Moon",
        arcana: "Major",
        suit: null,
        number: 18,
        image: "./images/The Moon.jpg",
        keywords: "It’s Mystery Season",
        meaning:
          "Not everything is as it appears and some emotions remain subconscious. There is grave or suppressed doubts about how to move forward with something close to your heart. There is mystery brewing as unclear signals create multiple meanings and fear stories circle around in your mind. The Moon highlights illusion, uncertainty, intuition, and emotional depth. You will have to make this decision on your own. If you feel trapped look beyond what you think is possible because the limitations are self-imposed. Move slowly and verify everything until clarity emerges. Your dreams may hold guided messages."
      },
{
        id: 19,
        name: "The Sun",
        arcana: "Major",
        suit: null,
        number: 19,
        image: "./images/The Sun.jpg",
        keywords: "Clarity Blooms",
        meaning:
          "Joy, vitality, and truth are breaking through. It is time for the good things in life: love, sunshine, play, and rest. It is more about recuperation than adventure. The Sun illuminates success, confidence, and emotional openness. This card describes a honeymoon period in a new relationship, that care-free feeling. An air of innocence fills the atmosphere possibly in the form of children entering your life. Positivity and self-acceptance reign as relationships, projects, and family are nurtured. Allow yourself to be fully seen as you start to see the truth and celebrate wins. "
      },
{
        id: 20,
        name: "Judgement",
        arcana: "Major",
        suit: null,
        number: 20,
        image:"./images/Judgement.jpg",
        keywords: "The Wake-up Moment",
        meaning:
          "A spiritual awakening is unfolding. You are being awakened for reflection, to take an honest look and reckon with yourself to transform. There will be a significant life change as a project or relationship concludes. Judgement represents rebirth, self-evaluation, and answering a higher calling. You may need to examine your conscience and review your previous actions. This card is all about second chances, forgiveness, and financial reward for past efforts. Release the old verdict, the past no longer defines who you are becoming. Events are about to speed up."
      },
{
        id: 21,
        name: "World",
        arcana: "Major",
        suit: null,
        number: 21,
        image:"./images/World.jpg",
        keywords: "Cycle Fulfilled",
        meaning:
          "Completion and fulfillment are within reach. You are leveling up. Success and happiness mean a dream is coming true. There is a mature partnership, mastery of a skill, and an achievement of wholeness. You feel satisfied and rewarded as travel might now be possible. The World marks the successful closing of a cycle and the beginning of a new level of consciousness. Celebrations commence and whatever difficulties you faced are gone, your triumph is applauded by all."
      },
{
        id: 22,
        name: "The Fool Reversed",
        arcana: "Major",
        suit: null,
        number: 0,
        image: "./images/The Fool Reversed.jpg",
        keywords: "Check the Cliff",
        meaning:
          "A doorway has opened that logic cannot fully explain.  There is a possible error in judgement due to bad advice taking you in the wrong direction, so examine all offers carefully.  You fear this change and hesitate, avoiding the necessary risk or you may be trying to force a situation that can only backfire.  The Fool arrives when your soul is not ready to leap and is waiting for certainty to appear. It indicates recklessness, poor judgement, and using chaos as a means of avoidance. If you are receiving mixed signals, it’s time to slow down. Look before you leap.  If the conditions are not right, try another route."
      },
{
        id: 23,
        name: "The Magician Reversed",
        arcana: "Major",
        suit: null,
        number: 1,
        image: "./images/The Magician Reversed.jpg",
        keywords: "Power Misdirected",
        meaning:
          "Your energy is scattered right now as great plans have no foundation.  The Magician Reversed tells of trickery, manipulation, and misuse of power. You are ready to move on but feel restrictions at every turn causing frustration. There is charm without depth, scattered effort, and manipulation patterns emerging causing self-doubt, unrealized protentional, and creative blocks. Be aware that others may not have your best interest at heart."
      },
{
        id: 24,
        name: "The High Priestess Reversed",
        arcana: "Major",
        suit: null,
        number: 2,
        image: "./images/The High Priestess Reversed.jpg",
        keywords: "Secrecy Clouds",
        meaning:
          "Something important is hidden beneath the surface, but you are missing the information. You are ignoring all the signs the universe is giving you causing emotional confusion.  Shock and disappointment are about to come to light as secrets are revealed about a mentor you thought was above reproach revealing they are not all they seemed. The High Priestess Reversed tells you that you lack trust in your own intuition, choosing to believe the external noise.  You are ignoring your intuition, in denial of your real feelings, and your inner guidance system is blocked as secrets are emerging. Take care whom you confide in just now."
      },
{
        id: 25,
        name: "The Empress Reversed",
        arcana: "Major",
        suit: null,
        number: 3,
        image: "./images/The Empress Reversed.jpg",
        keywords: "Neglect Shows",
        meaning:
          "There is dependence and stagnation circling around. There are problems with an older female such as a parent or mother-in-law possibly involving jealously, clinginess, or parenting issues leading to confrontation. This card signals creativity blocks, infertility, emotional neglect, and worth tied to output. There could be money difficulties in the home causing miserliness or dangerous overspending. No matter the circumstances, you are over giving with your energy in an attempt to heal others and it is draining you.  Protect yourself by conserving your energy."
      },
{
        id: 26,
        name: "The Emperor Reversed",
        arcana: "Major",
        suit: null,
        number: 4,
        image: "./images/The Emperor Reversed.jpg",
        keywords: "Order Becomes a Cage",
        meaning:
          "Structure hinders freedom. A possessive, stubborn individual who wants to control others is in your orbit or you are dominating a person or situation needlessly.  The Emperor appears when domination, stubbornness, or control issues cause an imbalance of power. A fear of softness is causing rigidity that is harming morale. Someone is losing perspective. It’s time to step back."
      },

{
        id: 27,
        name: "The Hierophant Reversed",
        arcana: "Major",
        suit: null,
        number: 5,
        image: "./images/The Hierophant Reversed.jpg",
        keywords: "Outdated Scripts Loosen",
        meaning:
          "It is time to shed restrictive beliefs. An older oppressive person may give you a long, angry, heated speech of unsolicited advice. This card points toward rebellion, questioning tradition, spiritual independence, or following an authentic path. This indicates that you should not be deceived by this person simply because they are older or be persuaded by their passionate energy as it is only an illusion that they are wiser.  They may be using their status to manipulate you by giving you the wrong information. Unlearn shame, innovate carefully, and redefine your own rules. "
      },
{
        id: 28,
        name: "The Lovers Reversed",
        arcana: "Major",
        suit: null,
        number: 6,
        image: "./images/The Lovers Reversed.jpg",
        keywords: "Fork in Road",
        meaning:
          "A powerful imbalance is forming. Breakups and commitment issues surface as one partner pulls away rather than face conflict. The Lovers Reversed speaks not only of self-betrayal patterns, but misaligned values. Tensions mount as emotional distance and indecision bring an air of temptation. The cost of compromise creates a mismatch leading to disharmony.  Could also manifest as an overdependence on a parent."
      },
{
        id: 29,
        name: "The Chariot Reversed",
        arcana: "Major",
        suit: null,
        number: 7,
        image: "./images/The Chariot Reversed.jpg",
        keywords: "Reins Slip",
        meaning:
          "Lack of direction is causing a period of uncertainty. Ego and arrogance bring problems as plans go awry, transportation becomes a problem, and a journey gets delayed or abandoned all together. The Chariot Reversed represents stalled progress and hot/cold behavior. Emotions become overwhelming as ego starts driving in an aimless hustle causing aggression. You or someone near you needs to get a grip on themselves."
      },
{
        id: 30,
        name: "Justice Reversed",
        arcana: "Major",
        suit: null,
        number: 8,
        image: "./images/Justice Reversed.jpg",
        keywords: "Facts Missing",
        meaning:
          "Truth is hidden when there is a miscarriage of justice. A decision goes against you, or a straightforward situation gets skewed. The Justice card in the Reversed position represents dishonesty, denial, and lack of responsibility. Bias, self-justification, and unfair treatment complication the issues making it difficult to see those that can support you during these trying times. Hold true to your beliefs and do not judge yourself too harshly."
      },
{
        id: 31,
        name: "The Hermit Reversed",
        arcana: "Major",
        suit: null,
        number: 9,
        image: "./images/The Hermit Reversed.jpg",
        keywords: "Stuck in a Cave",
        meaning:
          "A loneliness loop is shutting out intimacy. There is enforced isolation. The Hermit Reversed highlights isolation, withdrawal, and avoidance. You or someone close is refusing to learn, listen, accept feedback, and has an overall resistance to insight resulting in withdrawal from others out of anger or resentment. They are overanalyzing and intellectualizing things rather than allowing feels to surface.  There is a need for more time to come to terms with a situation one is having a hard time accepting."
      },
{
        id: 32,
        name: "Wheel of Fortune Reversed",
        arcana: "Major",
        suit: null,
        number: 10,
        image: "./images/Wheel of Fortune Reversed.jpg",
        keywords: "Wheel Slowed",
        meaning:
          "There is a downturn in fortune and your or someone close to you is stuck on loop. Events are delayed due to a resistance to change. This card indicates bad timing and repeating the same pattern because the lesson has not been learned yet. One has little influence over the events at this time, but it will not be like this for very long if a different choice is made. Bad things happen to those who do not follow the path they are supposed to follow.  The Wheel Reversed may go against you now but can turn again your favor."
      },
{
        id: 33,
        name: "Strength Reversed",
        arcana: "Major",
        suit: null,
        number: 11,
        image: "./images/Strength Reversed.jpg",
        keywords: "Power Leaks",
        meaning:
          "Something is draining your power causing aggression, defensive panic or the need for immediate gratification, sometimes showing up as overindulgence in food or overspending in general. Strength reversed appears when self-doubt, insecurity, emotional weakness, and reactive behavior are present leading to harsh self-talk and high burnout risk. These difficult emotions need to be delt with despite the overwhelming urge to run rather than risk confrontation."
      },
{
        id: 34,
        name: "The Hanged Man Reversed",
        arcana: "Major",
        suit: null,
        number: 12,
        image: "./images/The Hanged Man Reversed.jpg",
        keywords: "Stuck Resisting",
        meaning:
          "A state of limbo is draining your energy. You are betraying yourself by shying away from making life-changing decisions because it means initial discomfort or expense, possibly wanting to return to being a kid. The Hanged Man Reversed indicates delay caused by lack of plans due to someone sacrificing their own needs for other while building resentment because of a fear of letting go. You need to wake up from your daydreams and confront whatever is causing your anxiety."
      },

{
        id: 35,
        name: "Death Reversed",
        arcana: "Major",
        suit: null,
        number: 13,
        image: "./images/Death Reversed.jpg",
        keywords: "An Ending is Postponed",
        meaning:
          "An ending gets delayed due to resistance to change. An inability to give up what has already been taken. Death Reversed marks the fear of endings, emotional stagnation, and clinging to pain. You are living in the past more than you realize. There is a fear of restructuring and of rebirth.  New opportunities are blocked until you let go of the people and positions that no longer align or reflect who you are or who you want to be. Stop wasting time clinging to the familiar past."
      },
{
        id: 36,
        name: "Temperance Reversed",
        arcana: "Major",
        suit: null,
        number: 14,
        image: "./images/Temperance Reversed.jpg",
        keywords: "Recalibrate",
        meaning:
          "Coping is becoming the norm. Temperance Reversed reflects an imbalance of emotional extremes and impatience with the unfolding process. You may feel trapped by others demands and under increasing pressure to cope. Money problems are often involved, and disharmony is in the air causing extreme mood swings and triggering excessive coping habits.  It is very important that you address any potential debt, deficit of time, or depilation of energy."
      },
{
        id: 37,
        name: "The Devil Reversed",
        arcana: "Major",
        suit: null,
        number: 15,
        image: "./images/The Devil Reversed.jpg",
        keywords: "Chains Need to Loosen",
        meaning:
          "You have thus far refused to break the bond The Devil Reversed reveals obsession, usually a bad relationship with a person or addiction where you are staying to long and refuse to let go.  You have an inability or unwillingness to walk away from a bond that has no future due to immaturity, low-self-esteem, or desperation. The drain on your energy needs to get plugged, to reclaim personal power."
      },
{
        id: 38,
        name: "The Tower Reversed",
        arcana: "Major",
        suit: null,
        number: 16,
        image: "./images/The Tower Reversed.jpg",
        keywords: "Rumble Delayed",
        meaning:
          "A necessary ending is being avoided as your worst fears are being realized. The Tower Reversed reveals an inability to remove what cannot continue. There are cracks under the surface, but there is procrastination around those hard conversations. Let things fall where they may.  Fear of this inevitable change is delaying growth and transformation.  Growth is painful, but once it happens there will be a sense of relief as the struggle ends."
      },
{
        id: 39,
        name: "The Star Reversed",
        arcana: "Major",
        suit: null,
        number: 17,
        image: "./images/The Star Reversed.jpg",
        keywords: "Light Dimmed",
        meaning:
          "Discouragement is causing a fog in the atmosphere. A project or partnership loses its way, a sign of a creative or emotional block. The Star Reversed is a sign of emotional exhaustion, hopelessness, and guarded optimism. There is lack of trust and your faith is wobbling just now indicating the need to step out of an illusion.  You need direction but beware of those that may use you for their own gain. Search for your star elsewhere."
      },
{
        id: 40,
        name: "The Moon Reversed",
        arcana: "Major",
        suit: null,
        number: 18,
        image: "./images/The Moon Reversed.jpg",
        keywords: "Fog Lifts",
        meaning:
          "There is a failure of nerve bring a danger of settling for second best. The air clear as clarity emerges, a hidden truth gets revealed, and emotional confusion gets lifted. However, you do not trust yourself, so you look to others for answers. The Moon Reversed highlights illusions getting names, truth surfacing, and confusion clearing. Overdependence on a mentor shows you have begun to doubt your instincts. Moonlight is deceptive so examine all motives carefully before you commit."
      },
{
        id: 41,
        name: "The Sun Reversed",
        arcana: "Major",
        suit: null,
        number: 19,
        image: "./images/The Sun Reversed.jpg",
        keywords: "Clouds Pass",
        meaning:
          "Temporary sadness, delayed success, self-doubt, and blocked optimism are the only things visible just now. Your goal is just out of reach as plans get delayed and frustration fills the air due to work or illness creating roadblocks. The Sun Reversed illuminates’ success with strain, joy blocked by fear, and your inner child needing to play. Vacations are cancelled or a relationship does not materialize. Your energy level is depleted."
      },
{
        id: 42,
        name: "Judgement Reversed",
        arcana: "Major",
        suit: null,
        number: 20,
        image: "./images/Judgement Reversed.jpg",
        keywords: "Call Ignored",
        meaning:
          "You are ignoring a higher calling. There is delay due to past getting in the way or fear of change. Judgement Reversed represents refusal to grow, self- criticism, and avoidance. You judge yourself too harshly or allow others to disregard your contributions. You are allowing the past to define who you are becoming which you are using as an excuse to not let go. You are in a shame loop of unresolved issues, a fear of stepping up, or avoiding closure. You need to re-examine your feelings and overcome the guilt. It doesn’t matter what other people think or how they feel about you.  The only thing that matters is how you think and feel about yourself. "
      },
{
        id: 43,
        name: "World Reversed",
        arcana: "Major",
        suit: null,
        number: 21,
        image: "./images/World Reversed.jpg",
        keywords: "Loose Ends",
        meaning:
          "Delays due to unfinished business. You may feel trapped by the past or by the needs of others. The World Reversed shows up when there is lack of closure, incomplete growth, and unfinished conversations.  Your world seems to be growing smaller instead of expanding. There is restriction causing failure to move forward often due to indecision or a negative vibration. If you address what is really holding you back with urgency, you will be able to walk the last mile, achieve success."
      },
{
        id: 44,
        name: "Ace of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 1,
        image: "./images/Ace of Cups.jpg",
        keywords: "Emotional Renewal ",
        meaning:
          "An emotional opening is beginning. The Ace of Cups signals overflowing feelings, spiritual renewal, and/or the chance to experience deeper connection. Your heart begins to open as it is becoming ready to receive what it once feared.  This could mean experiencing love, finding work you care about, pregnancy, and/or allowing the spiritual openness necessary for compassionate, creative, and intuitive energy to flow.  Indicates emotional fulfillment."
      },
{
        id: 45,
        name: "Ace of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 1,
        image: "./images/Ace of Cups Reversed.jpg",
        keywords: "Feelings Spill and/or Numb",
        meaning:
          "An emotional blockage is beginning to form. The Ace of Cups Reversed signals suppressed feelings, spiritual disconnect, and difficulty receiving love. Your heart is becoming guarded, and feelings of emptiness are creeping in leading to stagnation.  You are low on energy and/or spread too thin.  Honor your feelings, clear the negative energy from your life, and push forward."
      },
{
        id: 46,
        name: "Two of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 2,
        image: "./images/Two of Cups.jpg",
        keywords: "Balanced Union",
        meaning:
          "A meaningful bond is forming or strengthening. This card reflects mutual understanding, emotional balance, and energetic harmony between two souls. An aligned partnership where devotion, trust, and repair are prioritized. There is attraction, emotional harmony, and support.  Honest vulnerability creates powerful connection.  This could mean any of the following: engagement, marriage, reconciliation, reaching agreements easily, other creative pursuits."
      },
{
        id: 47,
        name: "Two of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 2,
        image: "./images/Two of Cups Reversed.jpg",
        keywords: "Harmony Off",
        meaning:
          "A meaningful bond is weakening. This card reflects mutual misunderstanding, emotional imbalance, and an unequal exchange between two souls.  A misaligned partnership where miscommunication, broken trust, and emotional distance are becoming the norm.  There is fear of intimacy, emotional imbalance, and lack of support.  Relationships suffer as secrets are revealed that possibly one person is unwilling to commit leading to break-ups."
      },
{
        id: 48,
        name: "Three of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 3,
        image: "./images/Three of Cups.jpg",
        keywords: "Celebration",
        meaning:
          "Joy expands when shared with others and/or a relationship move to the nest level of commitment.  The Three of Cups celebrates friendship, support, reunion, and emotional celebration.  A child could be born or a new project flourishes.  A supportive circle of energy surrounds you just now which is healing and gives you feelings of rejuvenation.  You find joy in networking, and/ or community events become your medicine. There are friendships to maintain, joyful connections to make, and reunions to attend.  Allow yourself to fully experience moments of happiness without guilt."
      },
{
        id: 49,
        name: "Three of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 3,
        image: "./images/Three of Cups Reversed.jpg",
        keywords: "Gossip Risk",
        meaning:
          "Joy drains away as a relationship bond is put to the test.  The Three of Cups Reversed indicates third-party drama, lack of support, separation, and emotional outbursts.  A partner is unfaithful and/or a relationship suffers due to betrayal or disappointment.  A circle of negative energy surrounds you just now which is damaging and drains you.  You find gossip in networking, and/ or old wounds of “belonging” stemming from childhood come to the surface. There are strained friendships, cliques forming, and social isolation. Overindulgence is causing health problems.  Allow yourself to fully experience your feelings without guilt."
      },
{
        id: 50,
        name: "Four of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 4,
        image: "./images/Four of Cups.jpg",
        keywords: "Look Again",
        meaning:
          "Emotional exhaustion may be clouding your perception. This is a call for an emotional pause. Your boredom is signaling a need for change.  Upon reflection you are dissatisfied with life or love and emotionally withdrawn.  The Four of Cups appears when discontent causes hidden opportunities to be overlooked. You may be in transient phase of a relationship when excitement wears off and the relationship either deepens or dissolves, or you could be starting to believe that you will never find love.  Reawaken your curiosity and take another look at your surroundings before isolation becomes comfort. Rediscover your faith in the existence of love that lasts."
      },
{
        id: 51,
        name: "Four of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 4,
        image: "./images/Four of Cups Reversed.jpg",
        keywords: "Option Arrives",
        meaning:
          "Emotional exhaustion may be clouding your perspective causing low self-esteem, loneliness, and poor health.  You have become overindulgent and complacent in your relationships and action must be taken. The Four of Cups Reversed appears when emotional awakening reveals new paths, renewed interest arrives, and/or the acceptance of new opportunities lifts apathy.  This arrives just in time giving a sense of re-engagement and re-awaken curiosity before isolation becomes comfort, but only after action is taken. Sometimes motivation comes after you start."
      },
{
        id: 52,
        name: "Five of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 5,
        image: "./images/Five of Cups.jpg",
        keywords: "Mourn, then Turn",
        meaning:
          "You are in or have recently ended a negative relationship. This could be a friendship, romance, or partnership where one or both of you have become emotionally and/or physically distant causing the relationship to end. The Five of Cups reflects disappointment, loss, or emotional regret — yet not everything has been taken from you.  Grief asks to be acknowledged rather than avoided. You need to sit with your loss as this disappointment is trying to teach you something.  Accept the reality of separation rather than replay the past.  Just because you may feel regret doesn’t mean you made the wrong decision. Healing begins when attention shifts toward what remains, a new, stronger you."
      },
{
        id: 53,
        name: "Five of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 5,
        image: "./images/Five of Cups Reversed.jpg",
        keywords: "Hope Returns",
        meaning:
          "A healing energy surrounds you just now.  You may have recently suffered a heartbreak or the ending of a dream.  The Five of Cups Reversed reflects forgiveness, acceptance, and indicates emotional wounds are on the mend.  A path to forgiveness is becoming clear, a recovery plan is forming, and healing is underway. — letting go of past hurts encourages this recovery. Hope and confidence return as a new positive phase of life begins."
      },
{
        id: 54,
        name: "Six of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 6,
        image: "./images/Six of Cups.jpg",
        keywords: "Gentle Past",
        meaning:
          "The past is influencing the present in a positive way. Someone or something from your past appears in the present sparking new ideas of future adventures. This card speaks of nostalgia, childhood memories, old relationships, and emotional innocence. You reunite with someone, an old skill returns, and/or your inner child is soothed is some way. You reconnect with what once made your spirit feel alive, spend time reminiscing, and you benefit from past experiences."
      },
{
        id: 55,
        name: "Six of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 6,
        image: "./images/Six of Cups Reversed.jpg",
        keywords: "Return to Now",
        meaning:
          "The past is influencing the present in a negative way. Someone or something from your past appears in the present sparking bringing up old wounds. This card speaks of nostalgia, childhood memories, old relationships, and emotional innocence. You may feel trapped by the past, that a relationship has no future, and/or your childhood trauma is affecting the present in a negative way. Sentimentality, spending too much time reminiscing with old lovers, and emotional immaturity are holding you back from the opportunities and new relationships that surround you. Escape the nostalgia trap, revise your outdated approach, and choose growth."
      },
{
        id: 56,
        name: "Seven of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 7,
        image: "./images/Seven of Cups.jpg",
        keywords: "Discern",
        meaning:
          "Too many possibilities may be creating confusion.  Only some of these opportunities will lead to fulfilling a goal. Sorting out which ones to pursue is proving to be difficult to do because of the tendency to fantasize about every option. You are trying to find the most logical option amongst the masses, but it is impossible to feel certain about any of them.  The Seven of Cups warns against illusion, fantasy, or emotional distraction. Instead of using logic to make this decision, you will need to use your intuition, gut feelings, instincts, and/or watch for signs to point you to the correct path. Choose reality, because not every opportunity carries substance beneath its appearance."
      },
{
        id: 57,
        name: "Seven of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 7,
        image: "./images/Seven of Cups Reversed.jpg",
        keywords: "Fog Clears",
        meaning:
          "Which possibility to pursue becomes clear, but you prefer to overlook the signs.  You have a strong belief that a new project, home, or love is the one and only way you will be happy.  The Seven of Cups Reversed highlights clear choices, grounded thinking, and realistic expectations.  Your head is in the sand, or you have blinders on.  You are deceiving yourself by ignoring what surrounds you.  Illusions will get named, priorities get set, commitments will get clarified, and very soon, you will be forced to face an uncomfortable truth."
      },
{
        id: 58,
        name: "Eight of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 8,
        image:"./images/Eight of Cups.jpg",
        keywords: "Seek Meaning",
        meaning:
          "A soul-level departure is unfolding. You or someone close to you are walking away from a hollow relationship, leaving a misfit role, or choosing depth over the familiar.  This decision did not come easy, but the long-term hand to looked upon, as a result action is being taken. The Eight of Cups represents walking away from something emotionally familiar in search of deeper fulfillment. It is likely that the only way to resolve a stagnant relationship is for someone to be the sacrificial “bad guy” so that both parties can have happier futures. Make the decision to embark on a spiritual search for emotional growth because staying where you no longer grow will cost more than leaving."
      },
{
        id: 59,
        name: "Eight of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 8,
        image: "./images/Eight of Cups Reversed.jpg",
        keywords: "Turning Back",
        meaning:
          "A soul-level departure is unfolding and you fear it. You or someone close to you has a fear of leaving a hollow relationship, or a misfit role.  This decision is difficult, but the long-term must be considered, or it will result in neglecting or abandoning a good relationship. The Eight of Cups Reversed represents difficulty walking away from something emotionally familiar. It is likely that there is an immaturity at play as one or both of you cannot appreciate what you shared together, which could lead to regret. However, there is emotional avoidance of unfinished grief resulting in poor judgement.  Make the decision to embark on a spiritual search for emotional growth because staying emotionally stagnant will cost more than leaving your comfort zone."
      },
{
        id: 60,
        name: "Nine of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 9,
        image: "./images/Nine of Cups.jpg",
        keywords: "Wish Energy",
        meaning:
          "Emotional satisfaction and personal fulfillment are within reach. Wishes are granted and dreams come true as you start living a life you once dreamed about. The Nine of Cups reflects gratitude, pleasure, and desires manifesting after long emotional effort. This is a time for good news, socializing, and friendships. You have a much-earned sense of satisfaction, your heart is content, and it is time to celebrate yourself. You are healthy, happy, and secure. Appreciate the emotional abundance that has already arrived."
      },
{
        id: 61,
        name: "Nine of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 9,
        image: "./images/Nine of Cups Reversed.jpg",
        keywords: "Gratitude Missing",
        meaning:
          "Emotional satisfaction and personal fulfillment are out of reach. A relationship suffers due to self-centeredness causing separation. Either you or someone close to you is allowing vanity and egotism rule while the other party feels overlooked causing hurt and a rift. The Nine of Cups reflects overindulgence patterns, craving more, and unfulfilled desires manifesting after long emotional emptiness. There are frustrating delays to plans.."
      },
{
        id: 62,
        name: "Ten of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 10,
        image: "./images/Ten of Cups.jpg",
        keywords: "Emotional Completion",
        meaning:
          "Harmony surrounds your emotional world. There is supportive energy in the environment with a feeling of belonging and/or being found.  Everyone feels harmony.  The Ten of Cups represents deep fulfillment, loving relationships, emotional peace, and lasting connection. There are peace, stability, and enjoyment in all your relationships. Thia is a time of completion, bonding, and happy togetherness.  What once felt impossible now feels natural."
      },
{
        id: 63,
        name: "Ten of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 10,
        image: "./images/Ten of Cups Reversed.jpg",
        keywords: "Needs Unmet",
        meaning:
          "A harmonic imbalance surrounds your emotional world.  Though it looks like harmony on the surface, there is an air of cultural strain of performative harmony so as not to reveal toxic family/social patterns. There is family/social tension due to unrealistic expectations and emotional disconnect. The Ten of Cups Reversed represents deep dissatisfaction, loveless relationships, emotional discord, and broken connection. There is a disruption in a family or tight social circle with one person trying to dominate others. Due to the drama, there is a pause to the usual gatherings.  Use this time to reevaluate your social circle and start meeting your own needs."
      },
{
        id: 64,
        name: "Page of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 11,
        image: "./images/Page of Cups.jpg",
        keywords: "Intuitive Ping",
        meaning:
          "A sensitive message or emotional awakening is emerging. Suddenly, you find yourself softening your defenses after receiving a tender message that sparks a creative idea. The message is an intuitive one so be emotionally curious and openly receptive. It offers good news about relationships or other creative pursuits. The Page of Cups encourages openness to intuition, creativity, and unexpected emotional experiences. Be careful to exhibit practicality as you may get fuzzy-headed by the news. Wonder is returning where cynicism once lived.  If there are any children involved, they may need help understanding the change in atmosphere."
      },
{
        id: 65,
        name: "Page of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 11,
        image: "./images/Page of Cups Reversed.jpg",
        keywords: "Feelings Unfocused",
        meaning:
          "A sensitive message or emotional awakening is blocked. It’s possible that a child, someone younger than you, or your own inner child is having a hard time expressing their feelings in a positive way.  The Page of Cups Reversed indicates blocked intuition, daydreaming, and carrying an emotional mixed bag. There is an old emotional wound that is causing immaturity. You are having a hard time getting all the necessary information without getting caught up in the drama.  To refocus feelings, you must locate the wound and heal it before emotional growth becomes stagnant."
      },
{
        id: 66,
        name: "Knight of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 12,
        image: "./images/Knight of Cups.jpg",
        keywords: "Invitation",
        meaning:
          "The Knight of Cups follows the call of the heart. This energy is romantic, imaginative, and emotionally expressive, but can become lost in fantasy if not grounded in reality.  There is a romantic action in the form of a heartfelt pitch that leads to emotional security which is intoxicating. The emotional pursuit is romantic, charming and imaginative as a new friendship or relationship becomes a possibility. There is a holiday feeling in the air. Social gatherings offer time spent contemplating life’s possibilities. This could intoxicate you, so be sure to remain grounded."
      },
{
        id: 67,
        name: "Knight of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 12,
        image: "./images/Knight of Cups Reversed.jpg",
        keywords: "Mood Swings",
        meaning:
          "The Knight of Cups Reversed indicates someone is idealizing a partner.  This person is deceiving you. He talks a really good game, but his words are dangerous if you believe him. This energy reveals unrealistic expectations, moodiness, and emotional inconsistency.  Someone uses charm or anger to avoid discussions of promises that have gone adrift. They can spin a story on the spot, which is very convincing. Do not trust this person, they are lying to you."
      },
{
        id: 68,
        name: "Queen of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 13,
        image: "./images/Queen of Cups.jpg",
        keywords: "Compassionate Clarityy",
        meaning:
          "Deep emotional wisdom surrounds this situation. There is deep empathy offered by a supportive mentor creating a feeling of emotional safety. You or someone in your life is a natural giver, caring, sensitive and insightful, usually a mother figure. The Queen of Cups represents compassion, intuition, healing, and psychic sensitivity. Trust the feelings you cannot logically explain, take note of your dreams, and/or consult with the queen of hearts in your life as it will offer clarity about the deepest needs that require compassionate nurturing within yourself and others."
      },
{
        id: 69,
        name: "Queen of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 13,
        image: "./images/Queen of Cups Reversed.jpg",
        keywords: "Emotional Overload",
        meaning:
          "Deep emotional exhaustion surrounds this situation. The Queen of Cups Reversed represents insecurity, codependency, and psychic sensitivity that is over absorbing energies that don’t belong to them. There may be someone in your life who is jealous, attention-seeking, needy, being unfaithful, or otherwise a negative influence. You have a “savior” pattern at play causing you to blur your boundaries and become emotionally overwhelmed by this person’s constant complaining and it leaves you drained.  Avoid this person, you do not need that in your life. You have your own financial and emotional pressures that need tending. Be your own best partner."
      },
{
        id: 70,
        name: "King of Cups",
        arcana: "Minor",
        suit: "Cups",
        number: 14,
        image: "./images/King of Cups.jpg",
        keywords: "Wise Heart",
        meaning:
          "Emotional mastery is possible without emotional suppression. The King of Cups symbolizes calm wisdom, balanced compassion, and the ability to navigate intense feelings with maturity and grace.  This can be viewed as steady devotion, calm leadership, and emotional balance.  This card brings the energy of a strong negotiator who exhibits quiet authority, a natural peacemaker, and a caring supportive partner who is a lover of the arts. Its presence in a reading suggests you will be happier following your heart to solve your problems. "
      },
{
        id: 71,
        name: "King of Cups Reversed",
        arcana: "Minor",
        suit: "Cups",
        number: 14,
        image: "./images/King of Cups Reversed.jpg",
        keywords: "Tides Volatile",
        meaning:
          "Emotional manipulation and repression are possible. The King of Cups Reversed symbolizes mood swings, emotional detachment, and indicates that control games are afoot.  Extreme emotions are at play and destructive behavior is getting out of control. Difficult situations are being avoided rather than resolved because destructive behavior tactics are being used to escape commitment. "
      },
{
        id: 72,
        name: "Ace of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 1,
        image: "./images/Ace of Pentacles.jpg",
        keywords: "Seed of Stability",
        meaning:
          "A new foundation is being offered and you have great potential to build something real in love and out in the world. The Ace of Pentacles signals opportunity in the material world —you are given a solid offer that brings growth, financial beginnings, or a chance to build lasting emotional security. This is grounded success that creates a firm foundation and the deepest parts of you are realizing worth is tangible. What begins now has strong potential to flourish"
      },
{
        id: 73,
        name: "Ace of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 1,
        image: "./images/Ace of Pentacles Reversed.jpg",
        keywords: "Grounding Needed",
        meaning:
          "A new foundation is being offered but you have a fear of security. The Ace of Pentacles signals opportunity in the material world — prosperity, career growth, financial beginnings, or a chance to build lasting emotional security. You may miss this chance due to your scarcity reflex. You are in survival mode causing tunnel vision and irrational decision-making. Ground yourself to create clarity before you miss the opportunities around you delaying personal growth. What begins now has strong potential to flourish."
      },
{
        id: 74,
        name: "Two of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 2,
        image: "./images/Two of Pentacles.jpg",
        keywords: "Keep it Moving",
        meaning:
          "Balance is required between the competing priorities. Time spent meeting the needs of relationships in love and career is juggled skillfully.  The Two of Pentacles reflects shifting responsibilities, financial decisions, or the need to adapt quickly without panic. Life is unpredictable just now. Be prepared to negotiate new responsibilities fairly. Flexibility will serve you better than rigid control."
      },
{
        id: 75,
        name: "Two of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 2,
        image: "./images/Two of Pentacles Reversed.jpg",
        keywords: "Simplify",
        meaning:
          "Balance is required between competing priorities. Love gets neglected due to career overload causing a need for chaos coping.  Financial stress and disorganization make life feel overwhelming, and out of balance.  A partner is dishonest or disinterested.  The Two of Pentacles reflects shifting responsibilities, financial decisions, or the need to adapt quickly.  Flexibility will serve you better than rigid control."
      },
{
        id: 76,
        name: "Three of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 3,
        image: "./images/Three of Pentacles.jpg",
        keywords: "Craft Improves",
        meaning:
          "Your efforts gain strength through collaboration. The Three of Pentacles represents teamwork, skill-building, craftsmanship, and recognition for dedicated work. Others are noticing the value you bring leading to financial reward and new opportunities. In all types of relationships, collaboration works. Let support in."
      },
{
        id: 77,
        name: "Three of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 3,
        image: "./images/Three of Pentacles Reversed.jpg",
        keywords: "Standards Slip",
        meaning:
          "Your efforts are mismatched.  You or someone close to you prefers the fantasy in their head, refusing to look at the reality of the situation. The Three of Pentacles Reversed represents poor teamwork, problems are denied, and essential work is neglected.  Others are noticing the lack of cooperation, poor planning, and the misaligned goals. Projects, relationships, and/or property dealings founder."
      },
{
        id: 78,
        name: "Four of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 4,
        image: "./images/Four of Pentacles.jpg",
        keywords: "Hold Steady",
        meaning:
          "Security has become tightly guarded due to a period of uncertainty. A solid foundation is now complete. However, your fear of its loss creates emotional or financial restriction. Stability is important, but clinging too hard may block new abundance.  Safety is needed both financially and emotionally. Protect emotional bonds and utilize saving resources. This card reveals success in your adventures and indicates good health."
      },
{
        id: 79,
        name: "Four of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 4,
        image: "./images/Four of Pentacles Reversed.jpg",
        keywords: "Loosen Grip",
        meaning:
          "Security has become too tightly guarded and/or love has become possessiveness. This card appears when fear of loss creates emotional or financial restriction. You or someone close to you is hoarding resources and/or being stingy with their time leaving you feeling undervalued.  Stability is important, but clinging too hard may block new abundance. Look around, there are less restrictive opportunities elsewhere."
      },
{
        id: 80,
        name: "Five of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 5,
        image: "./images/Five of Pentacles.jpg",
        keywords: "Ask for Support",
        meaning:
          "A perceived period of hardship or uncertainty may feel isolating, but support still exists around you. The Five of Pentacles reflects struggle, scarcity, or emotional exhaustion connected to survival fears. Low funds are triggering an unworthiness wound stemming from a past financial struggle. You may feel isolation from a group leading to loneliness causing emotional exhaustion. Heal the wound.  Help is closer than it seems."
      },
      {
        id: 81,
        name: "Five of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 5,
        image: "./images/Five of Pentacles Reversed.jpg",
        keywords: "Recovery Path",
        meaning:
          "A period of hardship or uncertainty may feel isolated, but support still exists around you. The Five of Pentacles reflects struggle, scarcity, or emotional exhaustion connected to survival fears. You or someone close to you are exhibiting poor judgement in financial and/or emotional dealings.  As a result, relationships suffer. Help is closer than it seems. Recovery support arrives, hope and warmth return, resources improve, self-worth and emotional security are rebuilt."
      },
      {
        id: 82,
        name: "Six of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 6,
        image: "./images/Six of Pentacles.jpg",
        keywords: "Balanced Exchange",
        meaning:
          "Energy is moving through giving and receiving equally. The Six of Pentacles highlights generosity, assistance, fairness, and resource exchange.  You may receive a financial or emotional gift that is unexpected. An investment, a legacy, fair pay, bonus, winnings, support without shame, or a small token of appreciation from a loved one are possible. A balance exists in your relationships and finances."
      },
      {
        id: 83,
        name: "Six of Pentacles Reversed",
        arcana: "Minor",
	suit: "Pentacles",
        number: 6,
        image: "./images/Six of Pentacles Reversed.jpg",
        keywords: "Imbalance",
        meaning:
          "Energy is moving through giving and receiving in a savior/victim loop.  An offer is made in bad faith and/or a payment due to you is withheld.  Examine all offers carefully. The Six of Pentacles Reversed highlights debt, assistance with strings attached, an unfair dynamic, or an unequal resource exchange. Pay attention to whether balance exists in your relationships and finances.  Someone around you cannot be relied upon.  If it appears too good to be true, walk away."
      },
      {
        id: 84,
        name: "Seven of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 7,
        image: "./images/Seven of Pentacles.jpg",
        keywords: "Tend the Garden",
        meaning:
          "Progress is unfolding slowly but steadily and will pay off in the long term. The Seven of Pentacles represents patience, long-term investment, and evaluating whether your current path will produce the future you desire.  Now is a good time to go for the promotion or start learning a new skill. Whatever you choose will be the right path, exhibit perseverance.  You have everything you need for success."
      },
      {
        id: 85,
        name: "Seven of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 7,
        image: "./images/Seven of Pentacles Reversed.jpg",
        keywords: "Adjust Strategy",
        meaning:
          "Progress gets sabotaged due to impatience and/or procrastination. The Seven of Pentacles Reversed represents impatience, a wrong investment, and/or the need to evaluate whether your current path will produce the future you desire.  You or someone you know may have feelings of frustration, wasted effort, and/or low self-esteem stem from lack of reward resulting in a quitting pattern.  The situation is not as bad as it seems, break the pattern to get back on track."
      },
      {
        id: 86,
        name: "Eight of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 8,
        image: "./images/Eight of Pentacles.jpg",
        keywords: "Practice",
        meaning:
          "Mastery develops through repetition and dedication. The Eight of Pentacles reflects focused effort, craftsmanship, education, and refining your skills. The universe will present you with an opportunity to develop skills that will lead to increased self-confidence and material success. Take the offer. You will feel valued and should devote yourself to it. Consistency is creating future success."
      },
      {
        id: 87,
        name: "Eight of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 8,
        image: "./images/Eight of Pentacles Reversed.jpg",
        keywords: "Recommit",
        meaning:
          "You overly dedicated yourself to something or someone without reading the fine print and you feel trapped reaping what you sowed. The Eight of Pentacles Reversed reflects neglected details, perfectionism, sloppy work, and lack of motivation. Avoiding the situation is creating feelings of depression causing you to make repetitive mistakes leading to burnout. Follow your intuition to escape the trap. You are allowed to do what’s best for you, even if it upsets others."
      },
      {
        id: 88,
        name: "Nine of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 9,
        image: "./images/Nine of Pentacles.jpg",
        keywords: "Enjoy Fruits",
        meaning:
          "Independence and self-earned abundance surround you. Quarrels cease, order is restored, and harmony rules. The Nine of Pentacles represents comfort, confidence, luxury, and enjoying the rewards of disciplined effort. You have healed an independence wound with earned comfort, increasing your self-worth and making you feel attractive. You enjoy luxury, self-sufficiency, and confidence. You are becoming fully capable on your own terms."
      },
      {
        id: 89,
        name: "Nine of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 9,
        image: "./images/Nine of Pentacles Reversed.jpg",
        keywords: "Freedom Questioned",
        meaning:
          "Insecurity and/ or superficial success surround you. Chaos is looming as security, home, and relationships are threatened due to funds being mismanaged. The Nine of Pentacles Reversed represents discomfort, self-worth tied to status, and lonely success. You or someone close to you are spending excessively coping with an old wound.  Heal the wound and get your finances under control before you lose freedom by becoming financially dependent on others."
      },
      {
        id: 90,
        name: "Ten of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 10,
        image: "./images/Ten of Pentacles.jpg",
        keywords: "Strong Foundation",
        meaning:
          "A legacy is being built as you heal generational and ancestral wounds. This indicates a happy marriage and children. You could receive a gift from a generous relative or friend, an inheritance, or reap the benefits of share dividends. The Ten of Pentacles symbolizes generational wealth, family stability, long-term success, and lasting security. Your actions now may benefit others far into the future"
      },
{
        id: 91,
        name: "Ten of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 10,
        image: "./images/Ten of Pentacles Reversed.jpg",
        keywords: "System Needs Repair",
        meaning:
          "A legacy is being threatened as generational and ancestral wounds make themselves known. There are broken foundations and financial conflicts within the family.  The beliefs of older and younger generations collide causing conflict over inheritances, wills, separations, other long-term expectations that do not come to fruition.  The Ten of Pentacles symbolizes inherited scarcity, family pressure, unstable structure, and generational instability. Heal ancestral wounds and break generational curses. Your actions now may benefit others far into the future."
      },
{
        id: 92,
        name: "Page of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 11,
        image:"./images/Page of Pentacles.jpg",
        keywords: "Practical Start ",
        meaning:
          "A practical opportunity is beginning to take shape. You are taking small steps to heal as courting in a relationship becomes steady and/or training begins for a new job or role. The Page of Pentacles encourages learning, planning, and planting seeds for future success. New opportunities, ambition, and grounded planning are favored.  Curiosity paired with discipline can open important doors"
      },
{
        id: 93,
        name: "Page of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 11,
        image: "./images/Page of Pentacles Reversed.jpg",
        keywords: "Missing Plans",
        meaning:
          "A practical opportunity is missed due to lack of plans. There is reckless energy in the air. The Page of Pentacles Reversed reveals missed potential, lack of direction, and procrastination threatening future success. You or someone in your orbit spends money without thinking which directly depletes your finances. Money drains away one way or another which restricts activities and delays projects due to lack of funds. Inconsistency paired with fear of effort can close important doors."
      },
{
        id: 94,
        name: "Knight of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 12,
        image: "./images/Knight of Pentacles.jpg",
        keywords: "Slow and Sure",
        meaning:
          "Steady effort will outperform rushed ambition. There is energy in the air of sure purpose. In relationships it shows as feelings of reliability and devotion. While not deeply creative, it offers steadfast loyalty, and reveals that life is headed in the right direction. The Knight of Pentacles represents responsibility, patience, reliability, and slow but dependable progress. Discipline with consistent progress is seen as care.  Persistence becomes your greatest advantage."
      },
{
        id: 95,
        name: "Knight of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 12,
        image: "./images/Knight of Pentacles Reversed.jpg",
        keywords: "Inertia",
        meaning:
          "Life has become stagnant.  There is an energy in the air of stubbornness, lack of motivation, and feeling stuck in a routine. The Knight of Pentacles Reversed represents irresponsibility, lack of patience, unreliability, and repetitive cycles. Someone you know is all talk no action.  They make you do all the work. They demand that you trust them, but you don’t feel like you can do that. There is a vibe of dishonesty surrounding this dealing. Do not give in to pressure, examine everything.  Persistence becomes your greatest advantage."
      },
{
        id: 96,
        name: "Queen of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 13,
        image: "./images/Queen of Pentacles.jpg",
        keywords: "Grounded Abundance ",
        meaning:
          "Nurturing and practicality work together here. There is an air of nurturing stability in abundance, resourceful management, and the body and home are being well tended.  The Queen of Pentacles reflects grounded abundance, emotional warmth, financial wisdom, and the ability to create comfort for yourself and others. The energy of the queen brings gifts, protection, and happy times financially and emotionally."
      },
{
        id: 97,
        name: "Queen of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 13,
        image: "./images/Queen of Pentacles Reversed.jpg",
        keywords: "Depletion",
        meaning:
          "Nurturing and practicality clash together here. You are over-giving in a relationship and/or you are overworking yourself in some way which is draining your energy reserves. There is a work-life imbalance causing you to neglect yourself physically and emotionally. The Queen of Pentacles Reversed reflects chaotic scarcity, emotional coldness, financial irresponsibility, and insecurity.  Protect your energy by setting the right boundaries to put yourself first, get thrifty, and avoid anyone with money issues."
      },
{
        id: 98,
        name: "King of Pentacles",
        arcana: "Minor",
        suit: "Pentacles",
        number: 14,
        image: "./images/King of Pentacles.jpg",
        keywords: "Prosperity Managed",
        meaning:
          "Material mastery and long-term stability are highlighted.  There is a protector-provider energy in the atmosphere. Solid leadership is allowing stewardship over control leading to wise investments resulting in gains in wealth.  The King of Pentacles represents success built through discipline, wise leadership, and strategic growth. The energy of the king brings problem-solving, security, and contentment. Wealth means little unless it creates true security and purpose. A good omen for work and business deals."
      },
{
        id: 99,
        name: "King of Pentacles Reversed",
        arcana: "Minor",
        suit: "Pentacles",
        number: 14,
        image: "./images/King of Pentacles Reversed.jpg",
        keywords: "Material Trap ",
        meaning:
          "Materialism and instability are highlighted. The King of Pentacles Reversed represents failure due to lack of discipline, poor leadership, and stagnation. Love turns into possessive security, and/or your career becomes about status with misuse of authority and controlling resources.  Somone in your realm is vengeful, corrupt, and untrustworthy. This person is motivated by money and/or power and will never honor their debts. Beware of their immoral behavior and protect yourself to escape the trap."
      },
{
        id: 100,
        name: "Ace of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 1,
        image: "./images/Ace of Swords.jpg",
        keywords: "Breakthrough",
        meaning:
          "There is a whirlwind of activity that successfully breaks through confusion cutting denial. The Ace of Swords signals mental clarity, truth revealed, and the power of decisive action. What was once uncertain is becoming sharply illuminated. You need to sharpen your wit to see the truth, but there is progress, justice, and victory. Your mental strength increases, giving you powerful insight that leads to honest conversations making necessary decisions clear."
      },
{
        id: 101,
        name: "Ace of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 1,
        image: "./images/Ace of Swords Reversed.jpg",
        keywords: "Clarity Blocked",
        meaning:
          "There is a whirlwind of activity that creates confusion starting with denial. The Ace of Swords Reversed signals mental distortion, dishonesty, and poor judgment. You have a mental fog, with possible failure looming as delays make you feel like success is just out of reach. You are dwelling too much on problems instead of acting. Your mental strength is depleting, making plans seem confusing, and anxiety to rise. You are living on a knife’s edge resulting in harsh words spoken.  Follow logic to get things moving again."
      },
{
        id: 102,
        name: "Two of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 2,
        image: "./images/Two of Swords.jpg",
        keywords: "Crossroads",
        meaning:
          "A difficult choice has been delayed giving an opportunity to gain perspective on a problem partnership or other troublesome association. A temporary truce was put into play as peace return after a period of turmoil allowing you a long pause before choosing.  The Two of Swords reflects inner conflict, emotional avoidance, or fear of confronting reality.  Silence cannot protect you from a decision forever.  Do not allow yourself to become numb to it as a means of protection.  Use this time to carefully consider your options.  Be factual and cautious considering every aspect.  For the truce to remain the solution must satisfy the needs of both parties."
      },
{
        id: 103,
        name: "Two of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 2,
        image: "./images/Two of Swords Reversed.jpg",
        keywords: "Veil Drops",
        meaning:
          "A difficult decision is forced. Truth is emerging shedding light on a long stating stalemate.  There is lack of trust, deception, and betrayal in a relationship when avoidance is exposed.  The Two of Swords reflects inner conflict, emotional avoidance, or fear of confronting reality. Overwhelming emotions end indecision as you become aware that others thrive on drama and manipulation.  There is an air of suspicion, to get the answers you seek, keep asking direct questions. The veil will drop."
      },
{
        id: 104,
        name: "Three of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 3,
        image: "./images/Three of Swords.jpg",
        keywords: "Cleanse by Honesty",
        meaning:
          "Painful truth carries the potential for healing. The Three of Swords represents heartbreak, disappointment, or emotional separation, but also the release that comes when illusions finally break apart.  There is a painful situation that needs to be addressed with the hurtful truth to heal. The situation is disappointing due to loss of an ideal or a relationship but also clarifying. The wound is named creating emotional release allowing for acceptance in the knowledge that something better is on the horizon."
      },
{
        id: 105,
        name: "Three of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 3,
        image: "./images/Three of Swords Reversed.jpg",
        keywords: "Healing Arc",
        meaning:
          "Healing can now begin. The Three of Swords Reversed represents recovery after loss, reconciliation, release of pain, or emotional recovery, but also the acceptance that comes when mending begins.  There is a relationship or other comment that has taken a turn for the worse causing drama and chaos.  There is bitterness in the air, but it won’t last very long.  This will pass as healing commences."
      },
{
        id: 106,
        name: "Four of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 4,
        image: "./images/Four of Swords.jpg",
        keywords: "Pause",
        meaning:
          "Your mind requires rest before clarity can return. The Four of Swords encourages retreat, recovery, and reflection. Your nervous system needs some TLC in the form of rest to improve your output. You need some space to rest, recover, meditate and reflect.  The universe will provide you with the opportunity soon, take the time. You will be given respite from whatever is draining you, but you have to allow it.  Healing happens when constant mental noise is allowed to settle."
      },
{
        id: 107,
        name: "Four of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 4,
        image: "./images/Four of Swords Reversed.jpg",
        keywords: "Stop Skipping Recovery",
        meaning:
          "Your mind requires rest before clarity can return, but thus far you have refused to allow it. There is a tension in the air that won’t allow you to rest, your mind wont shut off. This insomnia of the mind is leading to mental exhaustion. The Four of Swords Reversed indicates burnout, restlessness, and stress. This refusal to rest is killing your immune system.  You may get sick in the form of some kind of alignment that is going to be disruptive enough to force you to rest, possibly a short hospital stay."
      },
{
        id: 108,
        name: "Five of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 5,
        image: "./images/Five of Swords.jpg",
        keywords: "Cost of Conflict",
        meaning:
          "Conflict may leave no true winner behind. The Five of Swords appears when pride, tension, manipulation, or unresolved anger creates division. There is a win/lose dynamic in play warning of office politics, the need to be right, and hollow victories. You are trying too hard in a battle you cannot win. There are debts and potential poverty both emotionally and financially. Consider whether victory is worth the emotional or financial cost.  It is better to admit defeat than fight to save face. Do not drain your reserves."
      },
{
        id: 109,
        name: "Five of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 5,
        image: "./images/Five of Swords Reversed.jpg",
        keywords: "Choose Peace",
        meaning:
          "A conflict has escalated due to a failed initiative that is humiliating for you. Those around you offer spiteful criticism and you remain defiant rather than take responsibility for your past mistakes. You may need to apologize. The Five of Swords Reversed appears when pride needs to soften, tensions need to de-escalate, resentment needs to get released, or resolution needs to be found for the sake of reconciliation. Own-up to your part, as painful as it may be."
      },
{
        id: 110,
        name: "Six of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 6,
        image: "./images/Six of Swords.jpg",
        keywords: "Passage",
        meaning:
          "A transitional path is guiding you toward calmer waters. You are on a healing journey of leaving an old mindset with a transition plan to move towards calmer ground.  Finally, you take a break now that all the ducks are in a row. The Six of Swords reflects emotional recovery, leaving turmoil behind, and gradual movement away from painful circumstances.  This indicates that you may travel or enjoy some distance from an ongoing issue. Though the problem isn’t yet solved, you will enjoy a time out and feel refreshed upon your return. This transitional period is moving you forward towards recovery."
      },
{
        id: 111,
        name: "Six of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 6,
        image: "./images/Six of Swords Reversed.jpg",
        keywords: "Return to Turbulence",
        meaning:
          "A relapse into emotional drama is leaving you stuck in limbo. The Six of Swords Reversed reflects emotional baggage, difficulty moving on, and resistance to change. You are hanging on to pain too tightly, carrying it forward. The weight of your pain is causing stagnation and a lack of focus which is depleating your energy. You crave a break but now is not the time as you may miss out on opportunities. Make the choice to let go of your pain, tap your reserves, and apply yourself or risk losing everything you have accomplished."
      },
{
        id: 112,
        name: "Seven of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 7,
        image: "./images/Seven of Swords.jpg",
        keywords: "Hidden Angle",
        meaning:
          "Not everything is being openly revealed. The Seven of Swords points toward secrecy, strategy, avoidance, or hidden motives. Pay attention to what remains unsaid.  When trust issues seek clarification strategic tactics are used to avoid revealing the entire truth.  You face an advisory who wants something from you. Do not give into the deceit. You will need to formulate your own strategy to out wit them and may need to resort to cunning to win the battle."
      },
{
        id: 113,
        name: "Seven of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 7,
        image: "./images/Seven of Swords Reversed.jpg",
        keywords: "Accountability Arrives",
        meaning:
          "Big secrets are openly revealed as short cuts are exposed. The Seven of Swords Reversed points toward confession, accountability, transparency, and self-honesty.  Someone around you finally comes clean about dishonest behavior but examine the motive behind telling you the truth. Bullying or pressure may be used as a manipulation tactic to prevent your retaliation. Find your courage to stand your ground by holding them accountable."
      },
{
        id: 114,
        name: "Eight of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 8,
        image: "./images/Eight of Swords.jpg",
        keywords: "Limits are Mental",
        meaning:
          "Mental restriction is creating the illusion of helplessness. The Eight of Swords suggests fear, overthinking, or limiting beliefs that keep you trapped.  This fear is blocking you from getting close to any one or the belief that you “can’t” has you locked in metaphoric cage. There is a project or relationship that is failing. There is little you feel you can do about it, but in reality, you simply don’t want to. You are frozen in your denial, unable to face what is happening, causing fear of moving forward because you don’t know how. Seek the wisdom of others, focus on what you want, and feel your feelings. Freedom begins when perspective changes."
      },
{
        id: 115,
        name: "Eight of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 8,
        image: "./images/Eight of Swords Reversed.jpg",
        keywords: "Freedom Returns",
        meaning:
          "You blame only yourself for recent events because you have lost perspective which has trapped you in a cycle of guilt causing you to replay the events on a continuous loop of self-recrimination. The Eight of Swords Reversed an energy of empowerment, the courage to be open, and gaining perspective.  This suggests that you waste time worrying and replaying events, forgetting that you have the power to do something about. This is a reminder that you always have a choice; you are not stuck. Freedom begins when perspective changes, allowing new options to be seen, and old patterns to be released. It is time to grow."
      },
{
        id: 116,
        name: "Nine of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 9,
        image: "./images/Nine of Swords.jpg",
        keywords: "Night Thoughts",
        meaning:
          "Anxiety grows strongest in isolation as you have been steering clear of certain friends or co-workers who seem to enjoy battles. You feel run down and almost sick around them and long after as you replay events. The Nine of Swords reflects worry, sleeplessness, guilt, or feeling emotionally overwhelmed. Your shame voice is telling stories that are triggering anxiety with fear causing worry spirals. You are in danger of your anxiety becoming extreme, causing suffering, and becoming a victim of stress resulting in energy depletion. You have the power to get through this testing time.  Look within and name the fear. It will lose power once brought into the light."
      },
{
        id: 117,
        name: "Nine of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 9,
        image: "./images/Nine of Swords Reversed.jpg",
        keywords: "Dawn Breaks",
        meaning:
          "It has been impossible to see a good thing when it comes along because of a long-standing sense of despair and entrapment. This self-martyrdom is becoming a toxic pattern of thinking that is being used as an excuse to avoid the real issues. The Nine of Swords Reversed reflects releasing fear, hope returning, emotional healing, or recovery. This suggests that you need to name your fears. Once you name fear, anxiety starts to lessen as you can now see the night at the end of the tunnel. Coping returns as reassurance is found and you find ways to be gentle with yourself."
      },
{
        id: 118,
        name: "Ten of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 10,
        image: "./images/Ten of Swords.jpg",
        keywords: "Done is Done",
        meaning:
          "A painful cycle has reached its final chapter. The Ten of Swords represents endings, betrayal, exhaustion, or emotional collapse — yet it also signals that rebuilding can finally begin.  A chapter closes painfully as ego dies, bringing a finial ending with closure.  The ending may have been dramatic, even shocking, but all the signs were there. The universe makes the closure harsh as a relationship or other arrangement is cut out of your life against your will. This has been a long time coming and is for the better.  You will find that new opportunities will present themselves quickly."
      },
{
        id: 119,
        name: "Ten of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 10,
        image: "./images/Ten of Swords Reversed.jpg",
        keywords: "Rise Again",
        meaning:
          "A painful cycle has ended with harsh closure and signals that rebuilding can finally begin.  This usually refers to a group, suggesting that this applies to the end of a social phase, like a group of friends or co-workers is disintegrating, but no one wants to admit it yet. The Ten of Swords Reversed represents rebuilding strength, survival, slow recovery, or renewal. The disappointment that this engenders will eventually have to be faced, mange this dispiriting situation as best you can. Sometimes, things must end for others to begin."
      },
{
        id: 120,
        name: "Page of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 11,
        image: "./images/Page of Swords.jpg",
        keywords: "Curiosity",
        meaning:
          "Curiosity sharpens your awareness of helpful, practical advice. You or a mentor makes a shrewd observation offering valuable information with it, wisdom. The Page of Swords represents observation, learning, quick thinking, and gathering information. This indicates that intelligence is key just now, so when communicating ask direct questions, investigate, and observe the mind. Remain alert but avoid jumping to conclusions too quickly.  Be an astute judge of character and have your wits about you to stay ahead in negotiations."
      },
{
        id: 121,
        name: "Page of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 11,
        image: "./images/Page of Swords Reversed.jpg",
        keywords: "Scattered Logic",
        meaning:
          "You become aware of the conflicting gossip that surrounds you as you are someone near you is a thief or master manipulator who is up to no good. The Page of Swords Reversed represents impulsiveness, misinformation, and defensiveness. They are keeping others guessing with false statements, jumping to conclusions too quickly when anxiously scanning the room, all too eager to share their gossipy observations, stimulating the rumor mill.  With this kind of energy inside your sphere, be aware of subtle lies in other areas of your life, double check all paperwork carefully, and examine arrangements closely."
      },
{
        id: 122,
        name: "Knight of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 12,
        image: "./images/Knight of Swords.jpg",
        keywords: "Charge Ahead",
        meaning:
          "Momentum is accelerating rapidly as determination and action collide.  There is a battle that must be fought so a problem can be solved. A person or mindset carries a dynamic and charming energy into the air that lasts just long enough to infect you with the necessary confidence to meet the challenge with courage. The Knight of Swords brings ambition, direct communication, and intense mental focus. You need to confront whatever you have been avoiding by speaking plainly and taking decisive action.  Be mindful that speed without reflection can create unnecessary damage."
      },
{
        id: 123,
        name: "Knight of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 12,
        image: "./images/Knight of Swords Reversed.jpg",
        keywords: "Slow your Blade",
        meaning:
          "Momentum is accelerating rapidly. You or someone in your bubble is using anger as armor leading to a reckless push to give cutting remarks. This indicates a manipulation of others to cause drama while they sit back and watch. The Knight of Swords Reversed brings aggression, recklessness, burnout, and impulsive decisions. Chaos gets created then the responsible party retreats once the battle starts. They cannot be relied upon and they will reap what they sow."
      },
{
        id: 124,
        name: "Queen of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 13,
        image: "./images/Queen of Swords.jpg",
        keywords: "Discernment",
        meaning:
          "Wisdom has been earned through experience that brings eloquence, intelligence, and loyalty with limits. Like teaching a man to fish, this is transient help from a friend or co-worker who offered because they have been where you are at, but it won’t last long. The Queen of Swords symbolizes honesty, discernment, independence, and emotional intelligence balanced with logic. There is truth with compassion, and fair judgement, but see clearly, even when truth feels uncomfortable.  There is wisdom coupled with clear boundaries, so you don’t become co-dependent."
      },
{
        id: 125,
        name: "Queen of Swords Reversed",
        arcana: "Minor",
        suit: "Swords",
        number: 13,
        image: "./images/Queen of Swords Reversed.jpg",
        keywords: "Judgment Cloud",
        meaning:
          "There is ruthlessness in the air. Bitterness, emotional coldness, and harsh communication are all possible. There is someone with an armory of cutting remarks, dark threats and self-obsession who has little regard for other people’s feelings.  The Queen of Swords Reversed symbolizes dishonesty, co-dependence, and harsh critiques. Bitterness is being used as a shield creating icy distance.  Negotiations cannot go your way."
      },
{
        id: 126,
        name: "King of Swords",
        arcana: "Minor",
        suit: "Swords",
        number: 14,
        image: "./images/King of Swords.jpg",
        keywords: "Principled Clarity",
        meaning:
          "Clear judgment and intellectual authority dominate this situation. You or someone you know is a strategist who is sharp and decisive, who can see the big picture making them adept at problem solving. There is logic, authority, and strategic thinking energies whirling around the atmosphere. The King of Swords reflects strategy, fairness, discipline, and rational leadership. That authority is also honest, ethical, and has a service mindset. Projects take off but you must pay attention to detail to avoid delays. Decisions should be guided by truth rather than emotion alone."
      },
{
        id: 127,
        name: "King of Swords Reversed",
        arcana: "Major",
        suit: "Swords",
        number: 14,
        image: "./images/King of Swords Reversed.jpg",
        keywords: "Intellect Misused",
        meaning:
          "Clouded judgment and using intellectual powers for evil dominate this situation. Someone is controlling something via dark logic. The King of Swords Reversed brings emotional detachment, abuse of power, manipulation, and an authoritarian stance. A harsh opponent who relentlessly pursues their prize.  They show cruelty is their desire to win. There are open confrontations and opposition. It is best to retreat as there is little you can do when dealing with a tyrant."
      },
{
        id: 128,
        name: "Ace of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 1,
        image: "./images/Ace of Wands.jpg",
        keywords: "Ignition",
        meaning:
          "A surge of creative energy is awakening within you. This masculine energy brings with it passion, creative beginnings, and good communication.  The Ace of Wands signals inspiration, motivation, and the spark of a new beginning. You respond to a new desire with bold initiative giving yourself permission to explore uncharted grounds. No matter what your pursuit, you will be successful. What excites your spirit now has the potential to transform your path.  It is time to take an important step forward."
      },
{
        id: 129,
        name: "Ace of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 1,
        image: "./images/Ace of Wands Reversed.jpg",
        keywords: "Spark Sputters",
        meaning:
          "You have a creative energy block just now. The Ace of Wands delays, lack of direction, and hesitation. A desire gets blocked, stalled from the start due to fear of wanting it or poor timing. It is not the right time for what you want to create, and others have a hard time cooperating with your would-be plans. This causes frustrating delays to travel or projects, even postponement of special events. You must be patient, what you desire will come with divine timing."
      },
{
        id: 130,
        name: "Two of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 2,
        image: "./images/Two of Wands.jpg",
        keywords: "Horizon Calling",
        meaning:
          "Your vision is expanding beyond current limitations, and you now see future possibilities. Progress is made in a relationship when help is given. Both of you are equals, financially secure, and managing your lives’ well. The Two of Wands represents planning, possibility, and standing at the edge of a larger future. The desire for growth can no longer be ignored. It is time to plan the next step of this strategic expansion of your life, choosing growth. Your efforts will bring you happiness now and, in the future, make it all worthwhile."
      },
{
        id: 131,
        name: "Two of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 2,
        image: "./images/Two of Wands Reversed.jpg",
        keywords: "Decision Deferred",
        meaning:
          "Your vision has a limited perspective just now. The Two of Wands Reversed represents poor planning, fear of change, and playing small. You fear commitment because you are addicted to safety.  There is an imbalance in one of your relationships. One person has more influence than the other. Chances are that money has become the issue leading to disagreements. If not money then the domestic responsibilities need to be distributed more evenly. Either way, someone feels taken for granted."
      },
{
        id: 132,
        name: "Three of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 3,
        image: "./images/Three of Wands.jpg",
        keywords: "Ships Approach",
        meaning:
          "Momentum is built from the efforts you have already made, speeding up events. There is a surge of creative energy that manifests as increased communication, action, and reward.  A connection deepens meeting beyond surface-level comfort. You start to see results from consistent outreach. The Three of Wands reflects progress, opportunity, and watching long-term goals begin to unfold. Trust the process and that your energy is moving in the right direction.  Money flowing your way confirms you are really good at what you do."
      },
{
        id: 133,
        name: "Three of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 3,
        image: "./images/Three of Wands Reversed.jpg",
        keywords: "Recalibrate Plans",
        meaning:
          "Delay is building as obstacles come into view causing frustration and limiting results. The atmosphere is full of misconceptions and misunderstandings. The Three of Wands Reversed reflects stalled progress, missed opportunity, and watching long-term goals come to a halt for one reason or another. There is turmoil which when resolved will just open a can of worms. The need for distance is an issue as inpatients become a pattern and delays return.  The only this you can do is avoid confrontation until the air clears ."
      },
{
        id: 134,
        name: "Four of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 4,
        image: "./images/Four of Wands.jpg",
        keywords: "Stable Joy",
        meaning:
          "A period of celebration and stability is arriving. You feel satisfied and happy right now.  There is a harmonic energy floating around as festivities commence surrounding home and team goals attained in the building of supportive foundations bringing healing and sense of well-earned security. The Four of Wands symbolizes joyful milestones, supportive community, and moments that deserve recognition. You are consolidating different areas of your life, bringing greater enjoyment.  You are expanding into a larger space emotionally, spiritually, or in the form of a new property or home improvements to an existing dwelling. It is time to appreciate what you have and allow yourself to enjoy what has been built."
      },
{
        id: 135,
        name: "Four of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 4,
        image: "./images/Four of Wands Reversed.jpg",
        keywords: "Foundation Wobbles",
        meaning:
          "A period of instability is arriving. There is tension in the home and lack of support. You may find it difficult to bring together different aspects of your life right now.  The Four of Wands Reversed symbolizes disrupted plans, shaky culture, and fear of celebration. Rewards seem elusive as inflexible attitudes restrict your progress causing you to lose out to other contenders. Allow yourself to stay focused and open to possibilities instead of giving up too soon."
      },
{
        id: 136,
        name: "Five of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 5,
        image: "./images/Five of Wands.jpg",
        keywords: "Friction Sparks Growth",
        meaning:
          "Competing energies are creating tension that leads to health debate. The Five of Wands represents conflict causing awakening, friendly rivalry, scattered focus, or differing opinions. You are being asked to grow through the challenge by not allowing ego to take control. With this scattered energy all around you may need to work very hard to calmly negotiate your way out of disagreement. It would be wise to double check all complex documents for accuracy and rehearse plans in your head checking for cracks."
      },
{
        id: 137,
        name: "Five of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 5,
        image: "./images/Five of Wands Reversed.jpg",
        keywords: "Settle the Noise",
        meaning:
          "Competing energies are creating tension. You may hear something that leads you to believe someone lied to you. You find the news disheartening as you have worked hard and in good faith, only to find out others to not feel the same or share the same values. The Five of Wands Reversed represents conflict avoidance, cooperation, people-pleasing, or feeling drained by politics. There is nothing you can do about what they did because you cannot control other people’s behavior. Let it go to restore your emotional balance. Harboring resentment or negativity will only lead to bad things happening in your life."
      },
{
        id: 138,
        name: "Six of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 6,
        image: "./images/Six of Wands.jpg",
        keywords: "Win Acknowledged",
        meaning:
          "Recognition follows perseverance as admiration is expressed for a well-earned achievement. You succeed and receive a special reward for your hard work or a dispute ends. The Six of Wands reflects victory, confidence, and public acknowledgment for your efforts. The six is also favorable for the resolution of legal matters, delays in contracts, or work issues. Others are beginning to see the strength you once doubted in yourself.  Allow praise to build your confidence, enjoy your victory."
      },
{
        id: 139,
        name: "Six of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 6,
        image: "./images/Six of Wands Reversed.jpg",
        keywords: "Ego Check",
        meaning:
          ":  Lack of recognition leads to self-doubt as work gets overlooked.  An imposer voice sets in increasing the need for validation at the delayed success. Reward has eluded you despite your best efforts. The Six of Wands reflects lack of victory, poor self-confidence, and lack of public acknowledgment for your efforts. Frustrations mount as general delays to plans leave you with feelings of suspicion. The actions of others have left you confused and feeling like an outcast. You feel invisible and doubt yourself.  The best you can do is be your own best partner."
      },
{
        id: 140,
        name: "Seven of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 7,
        image: "./images/Seven of Wands.jpg",
        keywords: "Hold the Line",
        meaning:
          "You may need to defend your position or beliefs and remind yourself that your goals are worth pursuing. You are being called to protect your boundaries, defend your ideas, and stand up for yourself.  The Seven of Wands appears when resilience and courage are required despite pressure from outside forces. Show perseverance in your defense while standing on your ground. Stand firm in what you know to be true. Your path may not be easy, and it may be a while before you reap the rewards of your effort, but you will get where you need to be and chances are good that you will succeed if you believe you can."
      },
{
        id: 141,
        name: "Seven of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 7,
        image: "./images/Seven of Wands Reversed.jpg",
        keywords: "Choose Your Battles",
        meaning:
          "Defending your position or beliefs may be a waste of time and energy. You or someone you know fears conflict, are feeling overwhelmed by exhaustion is teetering on the edge.  The Seven of Wands appears when defensive walls are up, and the need to give up early due to pressure from outside forces is high. There is a communication barrier in negations that are not worth the effort due to the other party being unable to appreciate your viewpoint. It is bast to back away from this battle as there is very little chance for success."
      },
{
        id: 142,
        name: "Eight of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 8,
        image: "./images/Eight of Wands.jpg",
        keywords: "Swift Movement",
        meaning:
          "Events are moving quickly as action breaks fear.  There is a whirlwind of momentum as events speed up.  There are plenty of ideas, activities, and proposals on offer.  The Eight of Wands signals rapid communication, sudden progress, travel, or accelerated change. What felt delayed may now unfold all at once.  You feel appreciated and valued when others recognize your talents and you find it easy to connect with others who share your vision. You hear good news about a trip or project signaling very busy times ahead."
      },
{
        id: 143,
        name: "Eight of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 8,
        image: "./images/Eight of Wands Reversed.jpg",
        keywords: "Slow the Pace",
        meaning:
          "Events are moving too quickly.  It is hard to tell if an offer is genuine or false causing hesitation. There is scattered focus that causes crossed wires, impatience, and overload. Frustration is an issue because you can’t seem to connect or network with the right people that could help you figure things out.  The Eight of Wands signals miscommunication, delays, or rushing as a means of avoidance. It is better to turn down a proposal than invest in something that won’t hold up scrutiny"
      },
{
        id: 144,
        name: "Nine of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 9,
        image: "./images/Nine of Wands.jpg",
        keywords: "Last Push",
        meaning:
          "Fatigue may be present, but your spirit has not been defeated. This is a lesson in resilience as persistence pays off.  You are going through a stressful period where there are a million and one demands on your time, pressure is mounting. The Nine of Wands represents cautious strength, endurance, and guarding what you have fought hard to protect. Remain guarded with your energy but be willing to accept the need to work hard for a time, stay focused and make progress rather than regret your commitments. Rest if needed, but do not surrender.  You have all the resources you need to get through this stimulating time."
      },
{
        id: 145,
        name: "Nine of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 9,
        image: "./images/Nine of Wands Reversed.jpg",
        keywords: "Rest Before You Break",
        meaning:
          "Hypervigilance may be present, burnout is nearing. Pressure from the outside is becoming unbearable and mistrust is the dominate energy. It is time to reject further demands on your time and put yourself first.  The Nine of Wands represents emotional exhaustion, defensiveness, and paranoia. You need to rest, take care of yourself, and avoid making decisions when your resistance is low"
      },
{
        id: 146,
        name: "Ten of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 10,
        image: "./images/Ten of Wands.jpg",
        keywords: "Lighten the Load",
        meaning:
          "The weight you carry has become overwhelming. You are overloaded and over committed to the duties and responsibilities of others.  Past agreements have now become a great financial or moral burden.  The Ten of Wands reflects responsibility, pressure, and burnout caused by taking on too much alone. Release what no longer belongs on your shoulders."
      },
{
        id: 147,
        name: "Ten of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 10,
        image: "./images/Ten of Wands Reversed.jpg",
        keywords: "Burden Breaks",
        meaning:
          "You have unwittingly made a rod for your own back, and you blame others for burdening you.  Your perspective on the situation is dramatically different from that of others.  The Ten of Wands Reversed reflects the need to share the weight, drop the martyr, delegate responsibility, and release burdens.  This indicates it is time to release the weight you carry in favor of recovery and freedom"
      },
{
        id: 148,
        name: "Page of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 11,
        image: "./images/Page of Wands.jpg",
        keywords: "Explore",
        meaning:
          "A fresh sense of adventure is calling to you. You hear good news and several pressing matters with command your attention. This is also a warning to check all your facts instead of believing everything you hear. There are possibilities of playful flirting, and trying a new path make things feel exciting, but this is short lived. The Page of Wands symbolizes curiosity, enthusiasm, creative discovery, and fearless exploration. Follow the spark before doubt extinguishes it.  You may need to assess what is truth and what is hearsay to resist getting caught up in gossip."
      },
{
        id: 149,
        name: "Page of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 11,
        image: "./images/Page of Wands Reversed.jpg",
        keywords: "Scattered Spark",
        meaning:
          "There is a start-stop energy in the atmosphere. Real becomes fantasy and vis versa. There is manipulation in play. The Page of Wands Reversed symbolizes fear of looking silly, hesitation, lack of direction, and mixed interest. Malicious stories circulate as important information is purposefully withheld to manipulate or hide the truth. You or someone you know loves causing chaos as they thrive of misinformation and carless chatter."
      },
{
        id: 150,
        name: "Knight of Wands ",
        arcana: "Minor",
        suit: "Wands",
        number: 12,
        image: "./images/Knight of Wands.jpg",
        keywords: "Adventure",
        meaning:
          "Passion drives rapid movement forward as you act with purpose making bold moves toward an energetic pursuit. Whatever you have been waiting for begins to materialize.  Perhaps you meet a partner or enter an entrepreneurial phase. The Knight of Wands reflects bold action, charisma, confidence, and impulsive energy. Events speed up as the right conversations happen that bring creative success. Excitement can open doors."
      },
{
        id: 151,
        name: "Knight of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 12,
        image: "./images/Knight of Wands Reversed.jpg",
        keywords: "Burn Then Fade",
        meaning:
          "Commitment issues create instability, impatience, and thrill-seeking. You or someone you know is good at talking up a project because it attracts them attention, but when it’s time to put the work in, they are nowhere to be found showing that they are unreliable and insincere. The Knight of Wands Reversed reflects inaction, impulsive behavior, lack of confidence, and impulsive risk-taking. Recklessness may create avoidable setbacks.  This is a reminder to look at actions, not words."
      },
{
        id: 152,
        name: "Queen of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 13,
        image: "./images/Queen of Wands.jpg",
        keywords: "Radiant Presence",
        meaning:
          "Your or someone close to you has a presence that carries warmth and magnetic confidence, and it creates a painting of an inspiring leader. You/they shine with integrity, creativity, and you/they have clarity of vision. The Queen of Wands represents independence, creativity, leadership, and bold self-expression. You/they are an excellent conversationist and are sensitive to other feelings. Others respect your/their wisdom and ability to communicate with passion. Trust your ability to inspire others simply by being authentic as it increases confidence and creates magnetic energy."
      },
{
        id: 153,
        name: "Queen of Wands Reversed",
        arcana: "Minor",
        suit: "Wands",
        number: 13,
        image: "./images/Queen of Wands Reversed.jpg",
        keywords: "Power Misused",
        meaning:
          "Your presence carries emotional intensity with a flare of jealousy. You want to believe them when they say they can give you everything and are willing to take responsibility.  The Queen of Wands Reversed represents co-dependence, selfishness, insecurity, and jealousy.  Someone is not reliable, leaving promises unkept. Their drama is draining you and they wear a mask of insecurity.  Stay away from them as they have a negative effect on everyone in their orbit."
      },
{
        id: 154,
        name: "King of Wands",
        arcana: "Minor",
        suit: "Wands",
        number: 14,
        image: "./images/Knight of Wands.jpg",
        keywords: "Lead Boldly",
        meaning:
          "Vision and leadership shape the path ahead. There is steady passion and you can channel your fire wisely with the vision of what is coming up the road. You feel comfortable moving forward. The King of Wands symbolizes ambition, mastery, innovation, and commanding creative power. There is calm integrity and compassionate energy surround you. You or someone in your orbit is undemanding of others but still has energy and ideas. Wise, unassuming and loved by friends and family. Your ability to inspire others can turn ambition into inspired action, they respond to your positivity."
      },
{
        id: 155,
        name: "King of Wands Reversed",
        arcana: "Minor",
        suit: "Wands", 
        number: 14,
        image: "./images/King of Wands Reversed.jpg",
        keywords: "Vision Fog",
        meaning:
          "Vision is clouded and the path ahead is unclear. Arrogance and the feel of domineering heat cause ego-led decisions. The King of Wands symbolizes dominance, misuse of power, impulsiveness, and a control addiction. You or some you know have been embittered by bad experiences and never questioned their own intolerant attitude. Their inability to listen to other opinions and deviate from one’s own stubborn ways leaves no room for a moral compass.  Negative thoughts are brewing."
      },
];

document.addEventListener("DOMContentLoaded", () => {

 document.getElementById("startOverBtn").style.display = "none";

    function shuffleDeck(deck) {
        const copy = [...deck];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function getPositions(spreadSize) {
        if (spreadSize === 1) return ["Insight"];
        if (spreadSize === 3) return ["Past", "Present", "Future"];
        if (spreadSize === 10) {
            return [
                "The Present Situtation",
                "What is Helping or Hindering You",
                "The Best You Can Do Right Now",
                "Something You Dont Know",
                "The Past That is Affecting This",
                "Your Next Move or What Will Happen Next",
                "How you see yourself or how you are feeling",
                "What Others See",
                "Hopes or Fears",
                "The Final Outcome"
            ];
        }
        return Array(spreadSize).fill("Card");
    }

    function drawCards(spreadSize) {
        const shuffled = shuffleDeck(tarotDeck);
        const unique = [];
        const seen = new Set();

        for (const card of shuffled) {
            if (!seen.has(card.name)) {
                unique.push(card);
                seen.add(card.name);
            }
            if (unique.length === spreadSize) break;
        }

        return unique;
    }

    function renderCards(cardsArray, positions) {
        const container = document.getElementById('cardsContainer');

        const oneBoard = document.querySelector(".one-card-board");
        const threeBoard = document.querySelector(".three-card-board");
        const tenBoard = document.querySelector(".celtic-cross-board");
        const panel = document.getElementById("readingPanel");

        oneBoard.classList.remove("active");
        threeBoard.classList.remove("active");
        tenBoard.classList.remove("active");
        panel.classList.remove("active");

panel.innerHTML = `
    <div class="panel-placeholder">
        Click any card to inspect its deeper positional interpretation.
    </div>
`;
  
      container.innerHTML = "";

        if (cardsArray.length === 1) {
            oneBoard.classList.add("active");
            panel.classList.add("active");

            const slot = document.getElementById("oneSlot");
            slot.innerHTML = `
                <img src="${revealedCards[0] ? cardsArray[0].image : "images/card-back.jpg"}" class="slot-image">
                <div class="slot-num">1</div>
                <div class="slot-label">${positions[0]}</div>
            `;
            slot.style.pointerEvents = "auto";
            slot.setAttribute("onclick", `viewCard(0)`);
            return;
        }

        if (cardsArray.length === 3) {
            threeBoard.classList.add("active");
            panel.classList.add("active");

            cardsArray.forEach((card, index) => {
                const slot = document.getElementById(`threeSlot${index + 1}`);
                slot.innerHTML = `
                    <img src="${revealedCards[index] ? cardsArray[index].image : "images/card-back.jpg"}" class="slot-image">
                    <div class="slot-num">${index + 1}</div>
                    <div class="slot-label">${positions[index]}</div>
                `;
                slot.style.pointerEvents = "auto";
                slot.setAttribute("onclick", `viewCard(${index})`);
            });
            return;
        }

        if (cardsArray.length === 10) {
            tenBoard.classList.add("active");
            panel.classList.add("active");

            cardsArray.forEach((card, index) => {
                const slot = document.getElementById(`slot${index + 1}`);
                slot.innerHTML = `
                    <img src="${revealedCards[index] ? cardsArray[index].image : "images/card-back.jpg"}" class="slot-image">
                    <div class="slot-num">${index + 1}</div>
                    <div class="slot-label">${positions[index]}</div>
                `;
                slot.style.pointerEvents = "auto";
                slot.setAttribute("onclick", `viewCard(${index})`);
            });
            return;
        }
    }

    // ⭐ MUST BE INSIDE DOMContentLoaded
    window.viewCard = function(index) {
        const card = lastDrawnCards[index];
        const panel = document.getElementById("readingPanel");
	
        if (!card) return;
revealedCards[index] = true;

 document.querySelector(".one-card-board").classList.remove("active");
    document.querySelector(".three-card-board").classList.remove("active");
    document.querySelector(".celtic-cross-board").classList.remove("active");

        panel.classList.remove("animate");
        void panel.offsetWidth;

        document.querySelector(".board-container").classList.remove("fullscreen-board");
        panel.classList.add("fullscreen");
        panel.classList.add("active");

        panel.innerHTML = `
            <div class="back-btn" onclick="exitReading()">⬅ Back</div>

            <div class="reading-card-image">
                <img src="${card.image}" alt="${card.name}" class="reading-image">
            </div>

            <div class="entry-title">${card.name}</div>
            <div class="entry-position">${lastPositions[index]}</div>
            <div class="entry-meta">${card.arcana} Arcana — ${card.suit || "No Suit"}</div>

            <div class="entry-body">
                <strong>Keywords:</strong> ${card.keywords}<br><br>
                ${card.meaning}
            </div>
        `;
    };

    let lastDrawnCards = [];
    let lastPositions = [];
    let revealedCards = []; 

    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.addEventListener('click', () => {

            document.querySelectorAll('.spread-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const spread = btn.dataset.spread;
            let spreadSize = spread === "three" ? 3 : spread === "ten" ? 10 : 1;

            const positions = getPositions(spreadSize);
            const cards = drawCards(spreadSize);

            lastDrawnCards = cards;
            lastPositions = positions;
	    revealedCards = [];

            document.querySelector(".controls").classList.add("hidden");
            document.querySelector(".board-container").classList.add("fullscreen-board");

	    document.getElementById("startOverBtn").style.display = "block";

            renderCards(cards, positions);
        });
    });

    window.exitSpread = function() {
        document.querySelector(".controls").classList.remove("hidden");
        document.querySelector(".board-container").classList.remove("fullscreen-board");
        document.getElementById("readingPanel").classList.remove("fullscreen");
    };

window.exitReading = function() {
    console.log("BACK BUTTON FIRED");

    const panel = document.getElementById("readingPanel");

    // Hide the reading panel
    panel.classList.remove("fullscreen");
    panel.classList.remove("active");

    // Restore the spread container
    document.querySelector(".board-container").classList.add("fullscreen-board");

    // Show Start Over
    document.getElementById("startOverBtn").style.display = "block";

    // Re-render the ORIGINAL spread
    // This will keep already-read cards revealed
    // and keep unread cards face-down.
    renderCards(lastDrawnCards, lastPositions);
};
document.getElementById("startOverBtn").addEventListener("click", function() {

    // Hide Start Over
    document.getElementById("startOverBtn").style.display = "none";

    // Clear the current spread
    lastDrawnCards = [];
    lastPositions = [];
    revealedCards = [];

    // Hide all spread boards
    document.querySelector(".one-card-board").classList.remove("active");
    document.querySelector(".three-card-board").classList.remove("active");
    document.querySelector(".celtic-cross-board").classList.remove("active");

    // Hide reading panel
    const panel = document.getElementById("readingPanel");
    panel.classList.remove("fullscreen");
    panel.classList.remove("active");

    // Remove full-screen spread mode
    document.querySelector(".board-container").classList.remove("fullscreen-board");

    // Show spread selection buttons again
    document.querySelector(".controls").classList.remove("hidden");

    // Remove selected button styling
    document.querySelectorAll(".spread-btn").forEach(btn => {
        btn.classList.remove("active");
    });

});

}); // END DOMContentLoaded
