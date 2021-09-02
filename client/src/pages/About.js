import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    title: {
        fontSize: 50
    },
    body: {
        fontSize: 25
    }
}));

const About = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} justifyContent="stretch">
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} id="top" color="textSecondary">
                            Welcome!
                        </Typography>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Table of Contents
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#missionStatement">Mission Statement</Dropdown.Item>
                                <Dropdown.Item href="#storyTom">01 - Life as we knew it</Dropdown.Item>
                                <Dropdown.Item href="#symptoms">02 - Strange Symptoms</Dropdown.Item>
                                <Dropdown.Item href="#beginnning">03 - The Beginning</Dropdown.Item>
                                <Dropdown.Item href="#little">04 - Little did we know</Dropdown.Item>
                                <Dropdown.Item href="#diagnosis">05 - Diagnosis</Dropdown.Item>
                                <Dropdown.Item href="#stepOne">06 - Step One... plus...</Dropdown.Item>
                                <Dropdown.Item href="#stablization">07 - Stablization</Dropdown.Item>
                                <Dropdown.Item href="#fastForward">08 - Fast Forward</Dropdown.Item>
                                <Dropdown.Item href="#letsGet">09 - Let's Get to Thirty</Dropdown.Item>
                                <Dropdown.Item href="#summer2020">10 - Summer time 2020...</Dropdown.Item>
                                <Dropdown.Item href="#mid-summer">11 - Mid-Summer 2020...</Dropdown.Item>
                                <Dropdown.Item href="#trip">12 - The Trip.</Dropdown.Item>
                                <Dropdown.Item href="#serious">13 - Serious News.</Dropdown.Item>
                                <Dropdown.Item href="#burial">14 - The Burial...</Dropdown.Item>
                                <Dropdown.Item href="#future">15 - Future Hope and Promise...</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Typography className={classes.title} color="textSecondary">
                            What is The Tom Fund?
                        </Typography>
                        <Typography className={classes.body} color="body2">
                            The Tom Fund is a non-profit organization started by a family afflicted by Schizoaffective disorder.
                        </Typography>
                        <br></br>
                        <Typography className={classes.title} id="missionStatement" color="textSecondary">
                            Mission Statement
                        </Typography>
                        <Typography className={classes.body} color="body2">
                            Provide funds and resources to explore,
                            learn, and improve the lives of those suffering
                            from mental illness to improve their health care,
                            professional, and/or educational pursuits.
                        </Typography>
                        <br></br>
                        <Typography className={classes.title} color="textSecondary">
                            The Facts and Story
                        </Typography>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography className={classes.body} variant="body2" component="p">
                            What is schizoaffective disorder?
                            A mental health condition including schizophrenia and mood disorder symptoms.
                            Schizoaffective disorder is a combination of symptoms of schizophrenia and mood disorder,
                            such as depression or bipolar disorder. Symptoms may occur at the same time or at different
                            times.
                            Schizoaffective disorder is a chronic mental health condition characterized primarily by
                            symptoms of schizophrenia, such as hallucinations or delusions, and symptoms of a mood
                            disorder, such as mania and depression.
                        </Typography>
                        <br></br>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} id="storyTom" color="textSecondary">The Story of Tom</Typography>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} color="textSecondary">
                            Life as we knew it...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            Once upon a time, there was a fellow named Tom. He was known to be lighthearted and fun yet
                            serious and smart too! He was a good friend to many. A serious student, lego maniac, and
                            musician in his youthful school days. He loved athletics too including baseball, football, skiing,
                            and running. A natural-born perfectionist who tapped a tune from the time he was born. He
                            played piano, guitar, drums and even began to sing. A gifted youth who could disarm people
                            with humor and a smile, he earned straight A's and became the high school captain of the
                            football team. He was truly blessed with personality, smarts, and good looks. A natural charmer.
                            He successfully launched into college bringing home straight A's, a speaker for a college political
                            organization, and a full social life...until...he didn't. Until he called his mom one day in the
                            spring semester of his sophomore year asking to come home. He said he didn't feel well. He said
                            he was flunking out of classes. “Why of course, she responded, what's up, Tom?'' He came home
                            with all of his belongings and withdrew from school. He needed time. Ok. Chill. Hang with the
                            family.
                        </Typography>
                        <Typography className={classes.title} id="symptoms" color="textSecondary">
                            Strange symptoms....
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            Upon arriving home, Tom decided he wanted to pursue his music and writing more. The
                            artist in him wanted to be unleashed. From a family with dedicated parents, we encouraged and
                            supported yet, also tried to tell him he would need a job. We would sit at family dinners with all
                            four children, all four boys home that summer, and occasionally, Tom would look at me funny.
                            All four boys, Patrick (21), Tom (20), Pete (18), Alec (14). Those were the days of anticipation,
                            lively rants, and living life to the fullest for each of them. Oyster boats. Friends. Summer Work.
                            Youth. Summer baseball. The stare he would give me was as though he would look right through
                            me and expect me to understand what he was thinking. I wondered if anyone else felt it. As an
                            intuitive mom, I was failing the class! I really didn't know what was up for him yet I could feel a
                            change.
                        </Typography>
                        <br></br>
                        <Typography className={classes.body} variant="body2" component="p">
                            One day, he said he was going for a walk. Only to have him come home about 12 hours later.
                            He walked all around the area for about 10 miles wandering. He sat at the dining room table that
                            night sweating and wondering why there was a fuss. There were 3 police men at our dining room
                            table. What's up he wondered. We suggested he was missing. He shrugged and said ok and went
                            to bed.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="beginning" color="textSecondary">
                            The Beginning...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            By the end of August, he was writing up a storm convinced that there would be a flood in CT
                            and he had to head west. He had an emergency suitcase packed to go with supplies and such. He
                            would talk about it often to which we listened but didn't really think much about it. We teased
                            and thought he had an active artist's imagination and the gift of storytelling. He packed his bags
                            and left for Pennsylvania. He was on the hunt for a young lady he knew from high school. He
                            hatched a plan to go to the university there and hide out until he found her still convinced that
                            the flood was coming in CT any day. We didn't know where he went. He drove a very large, silver
                            older suburban and left a note that he was going to find work there.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="littleDid" color="textSecondary">
                            Little did we know...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            He lived on the streets. He stayed at the mall and on the university campus as long as he could
                            before being found out. Local fast food chains gave him free food. He slept in the suburban. The
                            young lady he was looking for contacted me. She said Tom had reached her with a cryptic
                            message. I had NO idea what was taking place. I called the police in town and in Pennsylvania to
                            unearth the story of Tom. The beginning of the story of Tom. He acted out and the police caught
                            him. Thankfully, instead of throwing him in a jail cell, they brought him to the local mental
                            hospital. The beginning of the story of Tom’s illness.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="diagnosis" color="textSecondary">
                            Diagnosis...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            At first he felt happy to be somewhere with people and being taken care of. I immediately
                            drove to Pennsylvania to bring him home. His oldest brother joined me in the efforts a day later.
                            We were told that he may have bipolar. He was unwell. Time for medications. What?! Here is
                            healthy Tom acting out. Is this youth angst or truly a mental health condition?! The mental
                            hospital, as lovely and drippingly sweet as Pennsylvanians can be with their southern charm,
                            truly was breaking new territory of news and information. Excuse me?! I was not quite buying it
                            yet. Can I please bring my son home now? They told me because of his age (over 18) he would
                            have to have an approval waiver signed by him to be released to our home. My ability to act
                            amidst outrage began. I learned to temper my Italian German temper with kind glances and
                            concern. I also learned how to speak to people in the mental health world. Instead of offering
                            him as a patient fresh air, sunshine, and walks outside with talks, he was offered drugs and
                            crummy food. While I certainly understood the plight of why, it made me boil with the thought
                            of how backward our mental health system is presently. He began to have a roommate more sick
                            than he who acted out and caused major trouble. Patrick stepped in to interpret and gage
                            understanding of the diagnosis and conclusion with me. I stayed at the local hotel for a week.
                            The whole situation went south as they were keeping him there because he was unwell and
                            didn’t feel safe. I asked to bring him home again. They approved it once they set us up with a
                            reference for an IOP in CT for which I was immensely thankful because it is not my wheelhouse
                            of profession. While learning on the go can be truly exhilarating, it takes true professionals
                            dedicated to the mental health system to understand and navigate the patient, the illness, the
                            language, and of course, the politics of the health care system for best care.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="stepOne" color="textSecondary">
                            Step One...plus...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            Upon getting back to CT, it felt like a sigh of relief just to be home. I had no idea that this living
                            nightmare was just beginning. Tom rested and agreed to care. He went to IOP, met people, and
                            took his new meds. Bipolar, while a challenge to live with, is socially acceptable. Within a couple
                            of months, he was agitated and unwell. The stability that I tried to create for harmony within our
                            new fragile family had come undone. While boys can be boisterous and lively, they can also be
                            rough on each other. What does it mean to talk about your problems?! Go to work! Ha! Not
                            exactly what it means to become well with a mental health issue. Tom became more depressed
                            with bouts of trying new work. He even became a successful electrician for a short time until he
                            admitted to his father, your right dad, that is not my type of work. Tom continued to write. Tom
                            continued to play music. He hoped for more however his symptoms came back. He had a ‘friend’
                            named Danny MacArthur who was the hallucination he would see. Speaking with Tom became a
                            new adventure. I never knew who or what to expect. My attempts at work suffered. He needed
                            care.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="stablization" color="textSecondary">
                            Stabilization...
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.body} variant="body2" component="p">
                            After many trials back and forth of running away, trouble with police, unsafe conditions beyond
                            words, Tom was diagnosed with schizoaffective disorder. Stabilization. Many days of sickness.
                            Vomiting. Headaches. Weight Gain. Depression. The list goes on...
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="fastForward" color="textSecondary">
                            Fast forward...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            How many times I walked around our home expecting to find him in a room having decided to
                            commit suicide. The fear was as thick in the air as morning fog in the mountains. It was literally
                            a feeling that was that prevalent in our home. He tried so many times. Yet his attempts seemed
                            more like cries for attention. He swallowed a bottle of Advil. He swallowed another bottle of
                            Advil. He contemplated hanging himself. And then came the story in town of the mother who
                            lost her husband literally he had hung himself. Tom was part of our family and it was his
                            brother's friend from football. Tom changed his mind about that one. In and out of the hospital
                            for numerous reasons. Tom became a sick young man barely able to get out of bed more than a
                            couple of hours a day. His best times became about taking our dog Daisy for a walk and meeting
                            various friends for his favorite meal. He always offered a kind word. His true suffering changed
                            him. His adult nature was that of an elderly person who lived a great life aka acceptance. He
                            would still become upset with not being able to participate as he had before, however, he came
                            to have an awareness (so smart) of his plight.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="letsGet" color="textSecondary">
                            Let’s Get to Thirty...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            Life journeys forward. He did have a comfortable existence for what it could be at 25 years old
                            having begun this awful mental illness journey between 19 & 20 even amidst his ups and downs.
                            We offered him a safe and happy home filled with food, a bed, love, support, and
                            encouragement. It gave us all a glimpse of the future. He even attended the football games
                            where he played in high school. There truly was hope that maybe, just maybe, in time perhaps
                            by the time he turned thirty, he would receive more relief and stability from this awful disease to
                            be able to live a rewarding, full life again whatever that meant. His father and I were fully
                            prepared to have him live with us for as long as he needed...forever if that’s what life meant. If
                            he needed true care, then back to the hospital for stability. His vulnerability lingered day to day.
                            He applied for housing in the area for people with disabilities - yeah, right! The line was
                            incredibly long to get in. And frankly, his father and I would rather have had him with us. He
                            insisted on more independence, freedom. Ok. Let’s see how to approach this next chapter.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="summer2020" color="textSecondary">
                            Summer time 2020...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            Tom was living life. Amazingly and thankfully, Tom often had a few friends to hang out with. A
                            fellow who he would play music with occasionally. Another one who also had a condition trying
                            to maintain stability living at home with his parents at that time. He even had a girlfriend
                            named Becca. They met at IOP - which is the mental health language for Intensive Outpatient
                            Program. He wasn’t feeling well and was diagnosed with lyme besides gastroparesis. He was
                            being fed more meds. COVID was now in full swing. He wanted to go to the hospital. I discussed
                            the idea and suggested that might not be a good idea given the COVID times. He went anyway.
                            The ambulance brought him in to review his issues. Leaving work early to retrieve him, he was
                            simply chatting with the hospital psychiatrist who could see he was stable and ok after an all day
                            visit. He came home to rest.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="mid-summer" color="textSecondary">
                            Mid-Summer 2020...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            His father and I, having been born and raised in the Midwest, were scheduling our annual family
                            trip to visit. The boys having various work and social schedules were not interested in joining
                            the fun this year. Ok. We always juggled visiting our elderly parents vs. care for Tom. It became
                            a worry that would not subside yet part of life at this chapter. The other boys were able to
                            understand as much as you can imagine. In the end who was watching who? Tom had such an
                            almost middle age adult nature due to his need for relaxation and calm lifestyle.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="trip" color="textSecondary">
                            The Trip.
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            We traveled on our usual summer trip. Having spent an enjoyable few days playing Scrabble and
                            visiting family in the country corn fields of Princeton, Illinois we made our way back to St. John,
                            Indiana to visit with the other side of the family. It was during that visit we went for dinner with
                            my parents. We went to a local park after for a walk. Having had little contact with the boys back
                            in CT other than a few texts here and there, we enjoyed our visit. The walk in the park was
                            surreal. Something changed. I could feel it. The evening sitting time at the house was boisterous
                            and lively with family jokes and sharing. I left to sit in the back only to find my husband there
                            relaxing watching the sunset. We shared a smile and a moment of peace together. Again,
                            something was different.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="serious" color="textSecondary">
                            Serious News.
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            We arrived home from our trip refreshed from the getaway having seen all of our family. The
                            boys were good, except for Tom. He was seriously ill. He did not want to live. He saw no other
                            way out. He committed suicide.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="burial" color="textSecondary">
                            The Burial...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            It is time. The burial was such a physical and wrenching part of finality of complete permanence
                            of the decision Tom’s sick mind made for himself. It was also a testament to the love in our
                            family. Each of us sat in silence and tears as our pastor performed the ritual to bury Tom’s
                            ashes. A sad and solemn time. His brother Patrick had a few words of amazing and profound
                            meaning to me, “Well, mom it is nice we had the time with him”. Excuse me, where did my baby
                            go?! While intellectually I accepted it my heart is still learning to accept the pain of losing a
                            child.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                        <Typography className={classes.title} id="future" color="textSecondary">
                            Future Hope and Promise...
                        </Typography>
                        <Typography className={classes.body} variant="body2" component="p">
                            Thus the birth of The Tom Fund - we want to enlighten and enrich anyone who is dealing with
                            this messy and complicated illness. If it is simply a conversation to share your story then so be it.
                            If there is a need for financial assistance, please ask. We genuinely would like to research and
                            learn more stories about how this disease has affected your life or those you may know. Please
                            feel free to reach us at the email: TheTomFund@gmail.com. (email tbd)
                            Thank you for listening to our story.
                        </Typography>
                        <br></br>
                        <Button href="#top" variant="light">Back to Top</Button>
                        <br></br>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

export default About;
