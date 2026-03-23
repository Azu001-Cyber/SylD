interface MetaInfoProps {
    duration: string;
    price: string;
}

const MetaInfo = ({ duration, price }: MetaInfoProps) => (
    <p className="text-sm text-muted-foreground tabular-nums">
        {duration} • {price}
    </p>
);

export default MetaInfo;
