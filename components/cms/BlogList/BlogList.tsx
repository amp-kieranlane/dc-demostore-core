import React from 'react';
import { CmsContent } from '@lib/cms/CmsContent';
import clsx from 'clsx';
import BlogCard from '../BlogCard';

type BlogListProps = {} & CmsContent;

const BlogList = ({ blogs = [] }: BlogListProps) => {
    return (
        <div className="amp-dc-blog-list">
            <div className="amp-dc-blog-list-wrap">
                {blogs.map((blog: any, index: number) => (
                    <div
                        key={`blog-${index}`}
                        className={clsx('amp-dc-bloglist-item-container', { ['blog-clear']: index === 2 })}
                    >
                        <BlogCard {...blog.snippet} viewType="list" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
