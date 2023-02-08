import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  BooksData: [
    {
      id: 1,
      name: 'HIDE AND SEEK',
      img: 'https://i.ibb.co/nQd0Zqg/HIDE-AND-SEEK-Free-Childrens-Book-By-Monkey-Pen.jpg',
      text: [
        'James, his sister Sally, and Mark, their BFF (Best Friend\nForever) were bored. They had played all day but now that\nit was dark and difficult to see, they had nothing to do.\nThey couldn’t play soccer because they couldn’t see the\nball. They didn’t want to go inside and play a game because\nit was a beautiful springtime night and they liked being\noutside, especially after having to play inside all winter\nlong. They just didn’t know what to do and it was a little\ntoo early for them to go home.\n“I guess I’ll just go home,” Mark said in a sad voice. “Aww\ncome on,” replied James. “We still have time for another\ngame of – of something.”\nThen Sally said, “I have an idea! Let’s play Hide-and Seek.”',
        '“I was just going to say that,” James said. “Yah, I’ll bet,”\nreplied his sister. “You always say you were thinking of\nwhatever I think of,” she snapped. “Do not!” James said in\na loud voice. “Do too,” yelled Sally.\nMark just looked down at the ground and shook his head\nfrom side to side. “They are at it again,” he mumbled to\nhimself. Then he yelled, “Okay, let’s play Hide-and-Seek\nI’ll be the seeker!”\nHe turned, faced a big tree, closed his eyes, and started\ncounting out loud. “100 – 99 – 98 – 97 …..” Sally and Mark\nstopped arguing, looked at each other, and ran off in\ndifferent directions to find a hiding place.\nIn the distance they could still hear Mark counting\n “4 – 3 – 2 – 1. Ready or not, here\nI come!” Then he turned and began looking for places\nwhere they could be hiding.',
        'Finding Sally was easy.\nShe always ran off and then circled back\nso she would be close to “base,”\nthe safe place to get to before being tagged.\nMark looked for the biggest tree\nand ran towards it.\nBut she wasn’t there.\n“I’ll bet she’s behind that big bush,”\nhe said to himself.\nSo he ran to it and was ready to tag her,\nbut she wasn’t there either.',
        'As he turned around, he saw James running towards\n“base” and darted after him. Just before\nhe touched James’ shoulder, James tagged the “base”\nand yelled out “SAFE!” “Did you get Sally yet?”\nJames asked. “No,” said Mark.\n“I haven’t been able to find her and it’s getting late and\nwe need to be heading home.”',
        'So both boys yelled out\n“Come on out Sally, it’s late.”\nBut there was no reply.\nNot even a little snicker from\nsomewhere in the darkness.\nThey yelled again.\n“Come on out Sally, it’s late.”\nStill there was no reply from Sally.\nThey began to worry and started searching for her. As\nthey walked around the area they called out “Sally, come\non, we give up; you’re safe.”\nBut no matter where they looked,\nor how much they called out,\nSally didn’t answer.\nIt was as if she disappeared.',
        'Sally was wondering what had happened.\nAll she could remember was\ncrawling under the big trunk\nof a fallen tree to hide.\nNow, as she looked up, she saw\nseveral stars through a small hole above her head.\nShe had fallen into a hole\nwhen she crawled under the tree trunk.\n“Help!” she yelled and heard her voice\necho throughout what must have been a cave.\n“HELP! Help, help, help!”',
        '“Did you hear that, James?”\nMark said excitedly.\n“Sally just yelled for help.”\n“Keep yelling Sally,” James screamed.\n“That way we can find you.”\nSally heard her brother and\nkept screaming. After a short while the boys were\nstanding next to the big tree trunk.\n“Hey! Are you stuck under this tree?”\nasked James. “Kind of,” Sally yelled.\n“When I crawled under\nit to hide, I fell into a cave.\nPlease help me, I’m scared.\nIt’s dark and I can’t get out.”',
        'Mark said,\n“James you stay with Sally and\nI will go get my dad.”\nThen he dashed off into the darkness.\n“Don’t be scared,” James said.\n“I am right here with you.”\n“No, you’re not,” Sally sobbed.\n“You’re up there and I’m down here.”\nAs Sally turned in the darkness of the cave,\nshe bumped into something,\nscreamed, and began to cry.',
        '“What’s wrong?” James yelled.\n“There’s something down here with me,”\nSally replied in a shaky voice.\nJust then, Mark and his dad came\nrunning through the woods.\nMark’s father knelt down and asked Sally\nif she was okay. He could hear her crying and sobbing.\n“Sally, are you hurt?”\nhe asked. “No,” she said.\n“But I’m scared and there is\nsomething down here with me.”\n“Stand back Sally.\nI am lowering a rope and\nwill be down with you in a second.”',
        'Mark’s dad tied the rope to the tree,\nfound the hole under the tree trunk,\nwiggled a bit, and lowered\nhimself into the cave.\nSally could see him coming down\nthe rope and stopped crying.\nNot only was he there but the cave became\nbrighter from the beam of\nhis flashlight as it danced\nacross the cave’s floor and walls.',
        'As he reached the floor of the cave,\nhe shone the light on Sally and gave\nher a big hug. “Don’t be frightened,”\nhe said. “I’ll have you out of here in no time.”\nThen he shone the light around\nand saw that she had fallen into a small cave.\nAnd very close to her,\nin the middle of the cave,\nwas something wrapped in layers\nof old blankets.',
        '“Mark, James, there’s something down here.\nI am going to tie it to the rope and I want you to\npull it out.” “Okay,” they replied.\nThe boys pulled out the object, untied it,\nand let the loose end of\nthe rope fall back into the cave.\nThe cave wasn’t deep and Marks’\ndad boosted Sally over his head so she could\ncrawl out. He then grabbed\nthe rope and with a little jump, was\nable to grab the opening\nand pull himself out.',
        '“Let’s go back to my house for a cup of hot tea.\nI’ll call your parents so they aren’t worried,\nand we’ll see what treasure Sally found.” He said.',
        'When they got to Mark’s house,\nthey sipped their tea and began unwrapping the treasure.\nThey carefully peeled off layers of old blankets\nand cloth to reveal a wooden box.\nThey slowly opened it and stared in amazement.',
        '“Oh my,” Sally said in disbelief.\n“I don’t believe what I am seeing.”\nThe boys and Mark’s father just stared.\nInside the box were jewels of every color you could imagine.\nThere were diamonds,rubies, sapphires, and emeralds\nof all shapes and sizes.Intermixed they could see several\ngold coins and strands of pearls.“We’re rich,” the boys\nscreamed. “Not quite,” interrupted Mark’s father. “Someone\ncould have lost this and I don’t think you should plan on\nspending any of it until we find out a little more. Besides,\nSally found it.” “I’ll share it,” Sally said happily. “That’s nice\nSally,” replied Marks dad. But the right thing\nto do is contact the authorities.”',
        'The next day, the four of them\nand Sally’s mother drove to the police station,\nexplained what had happened,\nand gave the treasure to the police to hold while\nthey conducted their investigation.\nThey left the police station sadly\nand even the double dipped ice cream cones\nMark’s father bought for them\ndidn’t make them smile.They drove back in silence.',
        'Several weeks passed with\nno word from the police.\nThen, one evening, Mark’s father\ncalled James, Sally, and their parents.\n“The police just called and\nI think you should come over right now,”\nhe said. “I’m afraid there is some\nbad news about the treasure.\nThe police are on their way and\nwill explain everything when you get here.”',
        'Sally and James didn’t say\nmuch during the ride to Mark’s house.\nSally thought that since it was\n“bad news” the treasure belonged\nto someone else, even though\nthey probably lost it.\n“Whatever happened to ‘finders-keepers’?”\nshe mumbled. “What did you say Sally?”\nher mother asked. “Oh, nothing.”\nSally replied. Then she let out\na long, sad sigh that echoed\nthrough the car.',
        'When they arrived at Mark’s house,\nthe police were there with the treasure box.\nAs Sally entered,\nthe captain introduced himself and said,\n“Sally, this is yours.\nYour parents need to sign\nsome papers but the box and its\ncontents are yours.”',
        'Sally, Mark, and James\nshrieked with joy and danced\naround the room. Then Sally said,\n“What is the bad news?”\nThe captain smiled and said.\n“The treasure is worth more money than\nyou can imagine and with your\nnew found wealth comes\ngreat responsibility.” Sally didn’t quite understand\nwhat the captain was talking about and right now\nit really didn’t matter.',
        'Mark asked,\n“Are you going to share?”\n“Of course,” Sally said.\n“If you and James didn’t help me\nI might still be there.”\nSeveral days later Sally asked\neveryone over to her house.\n“I have decided what to do with\nthe money from the treasure after it is sold,”\nshe said.\n“I am giving 1/6 to our Mom and Dad,\n1/6 to Mark’s Mom and Dad,\n1/6 to Mark, 1/6 to James, and 1/6 for me.”\n“There is an extra 1/6,”\nMark proudly stated. He loved math\nand was right on top of Sally’s calculations.',
        '“No there’s not,” Sally said.\n“Is too,” James said. “Is not,”\nSally said in an angered voice. Just as\nMark was going to say,\n“They are at it again,” Sally said,\n“This is why there isn’t an extra 1/6!\nI am giving it to the local charity, so\nit can be given to those less\nfortunate and in need.”\nHer mother and father said\nit was a caring and responsible thing to do.\nThey were very proud of her and knew that she\nunderstood what the captain meant when he had turned\nthe treasure over to her just days before.',
      ],
    },
    {
      id: 2,
      name: 'GINGER THE GIRAFFE',
      img: 'https://i.ibb.co/wy3RpCL/GINGER-THE-GIRAFFE.jpg',
      text: [
        'Once upon a time, there was a giraffe named Ginger.\nGinger lived in Kenya, a country in Africa. Like all\ngiraffes, Ginger had a long neck and long legs. Because\nshe was so tall, she was able to eat food from the very\ntops of the trees in the savannah. The savannah in\nAfrica is an area with lots of grass and some trees.\nSometimes, a savannah is called grasslands. The other\nanimals like zebras and antelopes could not reach where\nGinger could reach. But Ginger always found food. She\nloved the leaves and the new buds of the trees. ',
        'One day, Ginger was busy eating her favorite leaves along\nwith some other giraffes. It was a bright sunny day and\nthere was not a cloud in the sky. It had not rained for a long\ntime, so the grass was very dry. She heard a noise down at\nthe bottom of her extra long legs: it was her friend, Mickey\nthe Monkey. Mickey was trying to say something, but Ginger\ncouldn’t understand what he was saying. He looked very\ntired. “What’s wrong?” asked Ginger. Ginger was a very kind\ngiraffe and wanted to help everyone.\nJust then Mickey fell over!',
        'Ginger was also a smart giraffe. She knew what was wrong.\nMickey couldn’t find anything to eat and he was very hungry.\nGinger nibbled some fresh, tender leaves and buds from the\ntop of the tree where she was eating. She dropped some of\nthe leaves and buds to the ground near where Mickey was.\nThen she nudged him a little with the hoof at the bottom of\none of her very long legs. “Wake up, Mickey!” said Ginger.\n“I’ve found something for you to eat.”\nSlowly Mickey sat up and ate a little.',
        'After a while, when Mickey was feeling better, Ginger asked\nhim, “What’s happened, Mickey? Why are you so hungry?\nWhy can’t you find anything to eat?” Mickey said, “It hasn’t\nrained for so long and now there’s no more food.” “That’s\nnot good,” said Ginger. “What’s happening with the other\nanimals?” “No one knows what to do,” answered Mickey. “All\nthe zebras and the antelopes and the elephants are getting\nworried about the dry grass.\nSome of them are thinking about leaving the savannah and\ntrying to reach the jungle.”\n“That’s a long trip,” said Ginger.\n“Are you going to go with them?”',
        '“I don’t know,” answered Mickey. “What do you think we\nshould do?” Ginger thought for a while and then suddenly, she\nhad a good idea. “We should go talk to Leo the Lion.\nHe is the smartest animal in the savannah!” Mickey was too\ntired to walk, so Ginger invited him to ride on her back. “Hold\non tight to my neck,” said Ginger. “There’s a lot to hold on\nto,” joked Mickey. Ginger laughed. “You’re right. I’ve got the\nlongest neck in Africa!” So they started their journey across\nto the other side of the savannah to look for Leo.',
        'Ginger and Mickey were in luck! Leo was sitting up on a rock\nand he was really easy to see as they walked through the\ngrass. “Hi, Leo!” they both shouted. Leo had been napping\nand was a little grumpy when they woke him up. But he was\npolite and said, “Hello Ginger and Mickey. Why did you walk\nthe whole way across the savannah? Just to wake me up?”\nBut he was joking; he had a smile on his face. “Mickey says\nthat there is no food left on the savannah because it’s been\nso dry,” said Ginger. “Do you have any ideas?”',
        'Leo thought for a while. He said, “There’s nothing we can do\nabout the rain. It will come soon, but we can’t be sure when it\nwill arrive. When the rain comes, all the plants will grow again\nand there will be lots of food for everybody.”\nHe thought a little longer. “The only thing I can think of is\nfor everyone to move closer to the forest,” he continued.\n“There will be more things to eat there, but I know it’s a long\ntrip and it will not be very easy.\nIt might take days to get there.”',
        'Ginger and Mickey looked at each other and then looked back\nat Leo. “Thank you, Leo,” said Ginger. “It’s probably best if\nthey all try to get closer to the jungle.” They said goodbye\nand then walked back across the savannah.\nNow they needed to gather all of the animals together to\nstart the long journey. Ginger didn’t need to go along because\nshe had plenty of food in her high trees. But she was a good\nfriend and wanted to help as much as she could.\nThey walked towards her favorite trees and guess what she\nand Mickey saw?',
        'All of the animals were already gathered there and waiting\nfor Ginger and Mickey! “Why are you all here?” asked Ginger.\n“Eddie the Eagle told us that you’re taking us to the edge of\nthe jungle,” said one of the zebras. “How did he know?” asked\nMickey. “He heard you talking with Leo,” said one of the\nantelopes. “So you’ve all decided to try to walk together to\nthe jungle?” asked Ginger. “Yes,” they all answered. “If you’ll\nhelp us to get there,” added one of the elephants.\n“Of course, I’ll help,” said Ginger. “I’m your friend.”',
        'So they started on their big journey across the savannah\nto the jungle. The sun was so hot and there was no food and\nno place to get a drink of water. And then they heard it. It\nwas thunder! “Thunder!” they all shouted. Thunder was very\nscary to the animals of the savannah. Can you guess why?\nFire! Sometimes the lightning hits the dry grass and the\nwhole savannah catches fire. Then everyone has to run. And\nthat is exactly what happened. “Fire!” they shouted. They\ncould smell it. And now they could see it.\nThe fire was coming towards them!',
        'Ginger had to think fast. Because she was so tall she could\nsee farther than any of the other animals.\nShe stretched her long neck up as far\nas she could. Now she could see a place where there was no\nfire. “Quick!” she said. “Everyone run this way.”\nAll of the animals followed her\nand ran as fast as they could. Soon, they were\nout of danger. They stopped and gathered together one\nmore time. “Is everyone here?” Ginger asked. She wanted\nto make sure they were all safe.\nAll the animals looked around; they were all there. ',
        'And then the most wonderful thing happened. “I felt a\ndrop,” said a zebra. “Me too,” said an antelope. It was rain!\nFinally! Everyone was very happy. It started to rain a little\nmore and then a little more. The rain put out the fire so\nthey didn’t have to run. And the rain filled their watering\nholes and made the plants grow again,\nso they didn’t have to make that long trip to the edge of the\njungle. Everyone would soon have enough food and water.\nSo Ginger, the Giraffe went back to her favorite tree and\ncontinued to munch on the leaves and buds.',
      ],
    },
    {
      id: 3,
      name: 'DOING MY CHORES',
      img: 'https://i.ibb.co/3CQwYn1/DOING-MY-CHORES.jpg',
      text: [
        'I like doing my chores. \nWell, maybe not all of them but most of them.  \nHmm, maybe not most of them. But a lot of them. \nOkay, maybe not a lot of them. But a few of them. \nWell, maybe not a few of them but … None of them! \nJust fooling … I really do like doing my chores. \nWhen I do my chores, it helps my Mommy and Daddy, and as youknow Mummies and Daddies sometimes need a lot of help.',
        'When I do my chores, it makes me feel important and\nI like to be important. Don’t you?\nSometimes I get bored so I do some chores,\neven if they are not my chores.\n',
        'Sometimes I have chores that I do not like to do.\nWhen that happens I make up a silly game and that\nmakes the chore easier.',
        'Like yesterday, I had to put my laundry away and\nI pretended that I was hiding it from my Mommy.\nIt was fun and I think I remember where I put it. ',
        'Just fooling … It is in my dresser where it belongs.\nSometimes when all my chores are done, we go\nto the park or have other special time.\nI know if my chores weren’t done we wouldn’t be able to do that.\n“So be important and have some fun.\nDo your chores until they are done.”',
      ],
    },
    {
      id: 4,
      name: 'ABE THE SERVICE DOG',
      img: 'https://i.ibb.co/tJWNVjN/ABE-THE-SERVICE-DOG.jpg',
      text: [
        '“Hi, I am Abe and I am a\nService Dog.',
        'When I was a puppy, my owner told me I would be a Service Dog\nfor a person who could not see. I didn’t know what that meant,\nbut I knew it was something special.\nWhen I got a little older, I was sent away to school.',
        'My sister was sent to another school\nto learn how to help people with Autism.\nTo be their friend and help them get around.',
        'One of my other brothers was sent to a special\nschool so he could learn how to warn people that they\nwere going to get sick before they did. ',
        'My other brothers and sisters became good\nfriends with people in good families.\nNot every dog can become a Service Dog.',
        'School was hard.\nI had to learn many things just like you.',
        'I had to learn to stop and look before crossing the street.\nAnd learn what a red, yellow, and green directional light\nmeant and what I should do.',
        'I was taught how to guide a person\nto go left, right, to step up and\ndown, to stop, to move forward a\nlittle, to back up, and much more.',
        'I had to learn where I was\nand how to get back, even\nin strange areas.',
        'I had to learn how to behave in a restaurant and\nnever, ever, beg for food. That was hard.',
        'I had to learn that I could be a plain old playful\ndog as long as my halter was off.\nBut once it was on… I was working.\nI became the eyes of my master and their safety\nand how they got around was up to me.',
        'After a long time in school, I graduated and my trainer introduced me to BJ. \nThe person who would become my master. We were both excited.',
        'We trained together for several weeks and\nbecame very good friends.\nShe was really nice and we always spent fun-time\ntogether once she took my halter off.',
        'One day the trainer said we were ready and I was\noff to a new home with my master and friend.',
        'We shared many years together and had many wonderful experiences.\nWe went shopping, visited friends, ate in fine restaurants, and\ntraveled across the country.',
        'I took care of BJ.\nI knew when she didn’t feel\nright and could tell if she was\nhappy or unhappy, sad, grumpy,\nor whatever.\nI would always try to make\nthings better for her.',
        'BJ took care of me.\nShe knew when I didn’t feel right and could tell if I were\nhappy or unhappy, sad, grumpy, or whatever.\nShe would always try to make things better for me.',
        'A long time has passed and now I can’t help my friend any more.\nBJ is off to school again and training with a new Service Dog.',
        'I will meet him tomorrow and help him understand his new master.\nThen I become like my other brothers and sisters.\nI become a good friend for people in a good family.\nYou really couldn’t ask for more.',
      ],
    },
  ],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.BooksData = [...state.items, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToBasket} = basketSlice.actions;

export const selectBasketBooksData = state => state.basket.BooksData;

export default basketSlice.reducer;
