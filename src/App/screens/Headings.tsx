import React, { Fragment } from 'react';

const Headings = () => (
  <Fragment>
    <h1>Headings</h1>
    <p>
      The following content is from{' '}
      <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">
        WAI Web Accessibility Tutorials - Headings
      </a>
      .
    </p>
    <p>
      Headings communicate the organization of the content on the page. Web
      browsers, plug-ins, and assistive technologies can use them to provide
      in-page navigation.
    </p>
    <h2>Heading ranks</h2>
    <p>
      Nest headings by their rank (or level). The most important heading has the
      rank 1 (<code>&lt;h1&gt;</code>
      ), the least important heading rank 6 (<code>&lt;h6&gt;</code>
      ). Headings with an equal or higher rank start a new section, headings
      with a lower rank start new subsections that are part of the higher ranked
      section. Skipping heading ranks can be confusing and should be avoided
      where possible: Make sure that a <code>&lt;h2&gt;</code> is not followed
      directly by an <code>&lt;h4&gt;</code>, for example. It is ok to skip
      ranks when closing subsections, for instance, a <code>&lt;h2&gt;</code>{' '}
      beginning a new section, can follow an <code>&lt;h4&gt;</code> as it
      closes the previous section.
    </p>
    <h3>Exception for fixed page sections</h3>
    <p>
      In fixed sections of the page, for example in sidebars, the heading ranks
      should not change depending on the ranks in the content area. In those
      cases, consistency across pages is more important.
    </p>
    <h2>Organize passages of text</h2>
    <p>
      In the following example, headings are used to only organize passages of
      text on a page, for example the main content:
    </p>
    <p>Content extract finishes here.</p>
  </Fragment>
);

export default Headings;
