import { PropsWithChildren, createContext, useContext } from 'react';
import { CmsContent } from '@lib/cms/CmsContent';
import { useDebug } from '@components/ui';
import CmsEditionFrame from './CmsEditionFrame';

interface CmsEditionProps extends PropsWithChildren {
    content: CmsContent;
}

type CmsEditionState = {
    id: string;
};

const CmsEditionContext = createContext<CmsEditionState | null>(null);

export function useCmsEdition(): CmsEditionState | null {
    return useContext(CmsEditionContext);
}

const CmsEdition = ({ content, children }: CmsEditionProps) => {
    const { showEditions } = useDebug();

    if (!content || !content._meta || !content._meta.deliveryId || !content._meta.edition) {
        return <>{children}</>;
    }

    return (
        <CmsEditionContext.Provider
            value={{
                id: content._meta.edition.id,
            }}
        >
            {!showEditions ? children : <CmsEditionFrame>{children}</CmsEditionFrame>}
        </CmsEditionContext.Provider>
    );
};

export default CmsEdition;
