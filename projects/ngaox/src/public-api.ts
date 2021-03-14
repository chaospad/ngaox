/*
 * Public API Surface of ngaox
 */

// interfaces
export * from './lib/interfaces/ngaox';
export * from './lib/interfaces/pad';
export * from './lib/interfaces/profile';

// main modules
export * from './lib/ngaox.module';

// pad modules
export * from './lib/pad/file/file.module';
export * from './lib/pad/post/post.module';
export * from './lib/pad/share/share.module';
export * from './lib/pad/topic/topic.module';

// profile modules
export * from './lib/profile/user/user.module';
export * from './lib/profile/contact-info/contact-info.module';
export * from './lib/profile/career/career.module';
export * from './lib/profile/project/project.module';

// CDK modules
export * from './lib/CDK/navbar/navbar.module';