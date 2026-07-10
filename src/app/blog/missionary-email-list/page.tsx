import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "How to Build Your Missionary's Email List (Without the Instagram Comment Chaos) | MyMissionaryMail",
  description:
    "The easiest way to collect emails before your missionary leaves — without spending an hour copying Instagram comments.",
};

export default function BlogPostEmailList() {
  const hrClass = "my-10 border-t-[0.5px] border-border";
  const h2Class = "mb-4 mt-10 text-[22px] font-medium leading-snug text-text-primary";
  const pClass = "mt-5 text-[16px] leading-[1.75] text-text-secondary";
  const boldClass = "font-medium text-text-primary";
  const linkClass = "text-deep-sage underline";

  return (
    <div className="bg-cream">
      <header className="border-b-[0.5px] border-border">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between px-8 py-4">
          <Logo />
          <div className="flex flex-col-reverse items-end gap-1 min-[480px]:flex-row min-[480px]:items-center min-[480px]:gap-4">
            <a href="/login" className="text-xs text-text-secondary min-[480px]:text-sm">
              Log in
            </a>
            <a
              href="/signup"
              className="rounded-md bg-sage px-4 py-2 text-sm text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-[680px] px-6 py-14">
        <h1 className="text-[30px] font-medium leading-[1.25] text-text-primary sm:text-[34px]">
          How to Build Your Missionary&apos;s Email List (Without the Instagram
          Comment Chaos)
        </h1>

        <p className={pClass}>
          When my family&apos;s missionary was getting ready to leave, we did
          what pretty much every missionary family does: posted on Instagram
          asking friends and family to drop their email in the comments if they
          wanted to get weekly updates.
        </p>
        <p className={pClass}>It seemed simple enough.</p>
        <p className={pClass}>
          Two hours later, I was still hunched over my laptop copying emails one
          by one out of 200+ comments. Some people had typed &ldquo;done!&rdquo;
          instead of their actual email. Some had written their email in the
          wrong format. A few had commented their phone number by mistake. By
          the time I&apos;d sorted through everything, cross-referenced the
          duplicates, and formatted it into something I could actually import
          into Gmail, I&apos;d spent well over an hour on a task that should
          have taken five minutes.
        </p>
        <p className={pClass}>
          That frustration is exactly why I built MyMissionaryMail. Because
          every missionary family goes through this, and it doesn&apos;t have to
          be this hard.
        </p>

        <hr className={hrClass} />

        <h2 className={h2Class}>The Old Way (And Why It&apos;s a Nightmare)</h2>
        <p className={pClass}>
          If you&apos;ve already been through this, you know exactly what
          I&apos;m talking about. If you haven&apos;t yet, here&apos;s what
          typically happens:
        </p>
        <p className={pClass}>
          <span className={boldClass}>The Instagram post method:</span> You post
          asking for emails in the comments. People respond enthusiastically,
          except half of them type &ldquo;sent you a DM!&rdquo; or
          &ldquo;done!&rdquo; without actually leaving an email. The ones who do
          leave an email often make a typo. Comments get buried as more roll in.
          You end up spending an hour or two manually copying each one into a
          spreadsheet, then formatting everything into a CSV just to get it into
          Gmail. And after all that, you&apos;re still not totally sure you got
          everyone.
        </p>
        <p className={pClass}>
          <span className={boldClass}>
            The paper sign-up sheet at the farewell party:
          </span>{" "}
          You pass around a clipboard and people fill it in. Except handwriting
          is hard to read, someone spills something on it, it gets left on a
          table, and you spend the next week texting half the attendees
          individually to get their email because you couldn&apos;t decipher
          what they wrote.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Texting everyone individually:</span> You
          text close family to get their emails directly. This works for 10
          people. It doesn&apos;t scale to the 80 people who came to the
          farewell and wanted to stay in the loop.
        </p>
        <p className={pClass}>
          None of these are unreasonable things to try. They&apos;re just the
          wrong tool for the job.
        </p>

        <hr className={hrClass} />

        <h2 className={h2Class}>
          The Right Way: Share a Link, Not a Comment Box
        </h2>
        <p className={pClass}>
          The better approach is to flip the process entirely. Instead of asking
          people to leave their email somewhere you then have to manually collect
          from, you give them a page where they sign themselves up, and the list
          builds itself.
        </p>
        <p className={pClass}>Here&apos;s what that looks like in practice:</p>
        <p className={pClass}>
          Instead of posting &ldquo;drop your email in the comments,&rdquo; you
          post a link to your missionary&apos;s sign-up page with something
          like: &ldquo;Sign up here to get Elder Smith&apos;s weekly mission
          updates!&rdquo; People tap the link, enter their name and email in
          about 30 seconds, and hit submit. That&apos;s it. Their information
          goes directly into your list without you touching it.
        </p>
        <p className={pClass}>
          No copying. No formatting. No hunting through comments. No deciphering
          handwriting.
        </p>

        <hr className={hrClass} />

        <h2 className={h2Class}>Sharing Your Link on Instagram</h2>
        <p className={pClass}>
          Instagram is still one of the best places to spread the word — you
          just need to share a link instead of asking for comments.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Instagram Stories</span> are the most
          effective placement for this. Post a story with your
          missionary&apos;s photo and a simple call to action like &ldquo;Want
          to get [missionary name]&apos;s weekly emails? Sign up at the link
          below!&rdquo; Since Instagram lets you add a link sticker directly to
          a story, anyone who taps it goes straight to your sign-up page.
          Stories feel personal and timely, which is exactly the right energy
          for a missionary send-off.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Feed posts</span> also work well for
          reaching people who don&apos;t check stories. Put the link in your bio
          before posting and tell people in the caption to click the link in
          your bio to sign up.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Before the farewell, not just at it.</span>{" "}
          One of the biggest mistakes families make is waiting until the day of
          the party to share the sign-up link. Post it a week or two before the
          farewell so people who can&apos;t make it in person still have a
          chance to get on the list. You&apos;ll often get more signups from
          people scrolling Instagram on a Sunday morning than from the party
          itself.
        </p>

        <hr className={hrClass} />

        <h2 className={h2Class}>
          Don&apos;t Forget the QR Code at the Farewell Party
        </h2>
        <p className={pClass}>
          For the party itself, a printed QR code is your best friend. It sounds
          more technical than it is. When you create your list on
          MyMissionaryMail, it automatically generates a QR code for your
          sign-up page that you can download and print.
        </p>
        <p className={pClass}>
          Print it out and put it somewhere visible at the party — on the food
          table, near the front door, or on a small sign near where people are
          gathering. Guests scan it with their phone camera, go straight to the
          sign-up page, and add themselves in under a minute. No passing around
          a clipboard, no collecting paper slips, no following up with anyone
          later.
        </p>

        <hr className={hrClass} />

        <h2 className={h2Class}>Step-by-Step: How to Set It Up</h2>
        <p className={pClass}>
          Here&apos;s how to get your missionary&apos;s email list up and
          running before the farewell party:
        </p>
        <p className={pClass}>
          <span className={boldClass}>Step 1: Create your account</span>
          <br />
          Go to{" "}
          <a href="https://mymissionarymail.com" className={linkClass}>
            mymissionarymail.com
          </a>{" "}
          and sign up for a free account. It takes about a minute.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Step 2: Create your list</span>
          <br />
          Click &ldquo;New list&rdquo; and fill in your missionary&apos;s name,
          a title (something like &ldquo;Elder Smith&apos;s Mission Email
          List&rdquo;), and a short welcome message that visitors will see when
          they land on the sign-up page. You can also upload a photo of your
          missionary, which makes the page feel personal rather than generic.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Step 3: Share your link</span>
          <br />
          Once your list is created, you&apos;ll get a unique link and a QR
          code. Share the link on Instagram stories and posts, text it to close
          family to get the first few signups rolling, and print the QR code for
          the farewell party.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Step 4: Watch the responses come in</span>
          <br />
          As people sign up, you can see all their responses in your dashboard.
          Name, email, and any message they left.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Step 5: Download and import to Gmail</span>
          <br />
          When you&apos;re ready to start sending updates, click &ldquo;Download
          Email List&rdquo; on your dashboard. This downloads a CSV file
          formatted for Gmail Contacts. Import it into Google Contacts, rename
          the label to something like &ldquo;Weekly Mission Email,&rdquo; and
          when you&apos;re ready to send an update, just type that label name
          into the Gmail To field and it&apos;ll populate with your entire list.
        </p>

        <hr className={hrClass} />

        <h2 className={h2Class}>A Few Tips for Getting More Signups</h2>
        <p className={pClass}>
          <span className={boldClass}>Start before the farewell.</span> Share
          your link 1–2 weeks out so people who can&apos;t make it still have a
          chance to sign up. You&apos;ll be surprised how many people from your
          missionary&apos;s high school, old neighborhood, or extended family
          want to follow along but won&apos;t be at the party.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Text it to close family first.</span>{" "}
          Having a few responses already on the page when others click your link
          makes it feel active and welcoming rather than empty. Seed it with
          5–10 responses from immediate family before you share it publicly.
        </p>
        <p className={pClass}>
          <span className={boldClass}>Mention it at the farewell.</span> If
          someone is giving a short talk or making announcements, have them
          mention the sign-up page and point to the QR code. A verbal callout at
          the right moment can double your signups from the party alone.
        </p>
        <p className={pClass}>
          <span className={boldClass}>
            Put the QR code somewhere unavoidable.
          </span>{" "}
          Near the food table is usually a safe bet. People linger there, they
          have their phones out, and they&apos;re in a good mood.
        </p>

        <hr className={hrClass} />

        <h2 className={h2Class}>The Bottom Line</h2>
        <p className={pClass}>
          Building your missionary&apos;s email list doesn&apos;t have to mean
          an hour of copying comments out of Instagram or chasing people down
          for their email addresses. Share a link, let people sign themselves
          up, and download the finished list when you&apos;re ready to start
          sending.
        </p>
        <p className={pClass}>
          If you&apos;re getting ready to send a missionary off,{" "}
          <a href="/signup" className={linkClass}>
            create your free list at mymissionarymail.com
          </a>
          . It takes about two minutes, and it&apos;ll save you a lot more than
          that.
        </p>
      </article>

      <Footer className="border-t-[0.5px] border-border py-6" />
    </div>
  );
}
