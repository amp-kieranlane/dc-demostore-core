import { ComponentType, ReactNode } from 'react';
import { useConfig } from './ConfigContext';

const withConfig = (key: string) => {
    return function <T>(Component: ComponentType<T>) {
        return (props: any) => {
            const config = useConfig();
            if (config && config.values && config.values[key]) {
                return <Component {...config.values[key]} {...props} />;
            }
            return <Component {...props} />;
        };
    };
};

export default withConfig;
