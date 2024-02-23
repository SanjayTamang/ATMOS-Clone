import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";

export const TextSection = ({ title, subtitle, buttonLabel, buttonLink, buttonIcon, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/Inter-Regular.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
      {buttonLabel && buttonLink && (
        <mesh position={[0, -0.5, 0]}>
          <Text
            color="#6f35cc"
            anchorX={"left"}
            anchorY="top"
            fontSize={0.3}
            maxWidth={2.5}
            font={"./fonts/DMSerifDisplay-Regular.ttf"}
            onClick={() => window.open(buttonLink, "_blank")}
          >
            {buttonLabel}
          </Text>
        </mesh>
      )}
    </group>
  );
};